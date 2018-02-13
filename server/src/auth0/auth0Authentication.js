const fetch = require('isomorphic-fetch');
const jwt = require('jsonwebtoken');
const jwkRsa = require('jwks-rsa');
const fromEvent = require('graphcool-lib').fromEvent;

//Validates the request JWT token
const verifyToken = token =>
  new Promise(resolve => {
    //Decode the JWT Token
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded || !decoded.header || !decoded.header.kid) {
      throw new Error('Unable to retrieve key identifier from token');
    }
    if (decoded.header.alg !== 'RS256') {
      throw new Error(
        `Wrong signature algorithm, expected RS256, got ${decoded.header.alg}`
      );
    }
    const jkwsClient = jwkRsa({
      cache: true,
      jwksUri: `https://${
        process.env.REACT_APP_AUTH0_DOMAIN
      }/.well-known/jwks.json`
    });
    //Retrieve the JKWS's signing key using the decode token's key identifier (kid)
    jkwsClient.getSigningKey(decoded.header.kid, (err, key) => {
      if (err) throw new Error(err);
      const signingKey = key.publicKey || key.rsaPublicKey;
      //If the JWT Token was valid, verify its validity against the JKWS's signing key
      jwt.verify(
        token,
        signingKey,
        {
          algorithms: ['RS256'],
          audience: process.env.REACT_APP_AUTH0_API_IDENTIFIER,
          ignoreExpiration: false,
          issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`
        },
        (err, decoded) => {
          if (err) throw new Error(err);
          return resolve(decoded);
        }
      );
    });
  });

//Retrieves the Graphcool user record using the Auth0 user id
const getGraphcoolUser = (auth0UserId, api) =>
  api
    .request(
      `
        query getUser($auth0UserId: String!){
          User(auth0UserId: $auth0UserId){
            id
          }
        }
      `,
      { auth0UserId }
    )
    .then(queryResult => queryResult.User);

//Creates a new User record.
const createGraphCoolUser = (userData, api) =>
  api
    .request(
      `
        mutation createUser(
          $auth0UserId: String!
          $email: String!
          $name: String
          $picture: String
          $githubName: String
        ) {
          createUser(
            auth0UserId: $auth0UserId
            email: $email
            name: $name
            picture: $picture
            githubName: $githubName
          ){
            id
          }
        }
      `,
      userData
    )
    .then(queryResult => queryResult.createUser);

const fetchAuth0UserData = accessToken =>
  fetch(
    `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/userinfo?access_token=${accessToken}`
  ).then(response => response.json());

module.exports = async event => {
  try {
    if (
      !process.env.REACT_APP_AUTH0_DOMAIN ||
      !process.env.REACT_APP_AUTH0_API_IDENTIFIER
    ) {
      throw new Error(
        'Missing REACT_APP_AUTH0_DOMAIN or REACT_APP_AUTH0_API_IDENTIFIER environment variable'
      );
    }
    const { accessToken } = event.data;

    const decodedToken = await verifyToken(accessToken);
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    let graphCoolUser = await getGraphcoolUser(decodedToken.sub, api);
    //If the user doesn't exist, a new record is created.
    if (graphCoolUser === null) {
      const userData = await fetchAuth0UserData(accessToken);
      graphCoolUser = await createGraphCoolUser(
        {
          auth0UserId: decodedToken.sub,
          email: userData.email,
          name: userData.name,
          picture: userData.picture
          // TODO: Support github user name if the provider is github
        },
        api
      );
    }

    // custom exp does not work yet, see https://github.com/graphcool/graphcool-lib/issues/19
    const token = await graphcool.generateNodeToken(
      graphCoolUser.id,
      'User',
      decodedToken.exp
    );

    return { data: { id: graphCoolUser.id, token } };
  } catch (err) {
    console.log(err);
    return { error: 'An unexpected error occured' };
  }
};
