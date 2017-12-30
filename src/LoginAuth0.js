import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import auth0 from "auth0-js";
import { setAuthSession } from "./Auth";
import { getEnvironmentVariables } from './utils';

const authenticateQuery = gql`
  mutation authenticate($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
    this.webAuth = new auth0.WebAuth({
      domain: props.domain,
      clientID: props.clientId
    });
  }

  componentDidMount() {
    const props = this.props;
    this.webAuth.parseHash(
      { hash: window.location.hash },
      (err, authResult) => {
        if (err) {
          // TODO: Handle errors
          return console.error(err);
        }
        if (!authResult || !authResult.accessToken) {
          return;
        }
        window.location.hash = "";

        // The contents of authResult depend on which authentication parameters were used.
        // It can include the following:
        // authResult.accessToken - access token for the API specified by `audience`
        // authResult.expiresIn - string with the access token's expiration time in seconds
        // authResult.idToken - ID token JWT containing user profile information

        props
          .authenticate({
            variables: {
              accessToken: authResult.accessToken
            }
          })
          .then(({ data }) => {
            const userInfo = data.authenticateUser;
            setAuthSession(authResult, userInfo.id);
            window.location.reload();
          });
      }
    );
  }

  _showLogin = () => {
    this.webAuth.authorize({
      audience: getEnvironmentVariables().auth0ApiIdentifier,
      redirectUri: getEnvironmentVariables().siteUrl,
      responseType: "token",
      scope: "openid email profile"
    });
  };

  render() {
    return <button onClick={this._showLogin}>Log in with Auth0</button>;
  }
}

const LoginAuth0WithData = compose(
  graphql(authenticateQuery, {
    name: "authenticate"
  })
)(withRouter(LoginAuth0));

export default LoginAuth0WithData;
