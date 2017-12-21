const envVars = {
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export default function() {
  if (!envVars.auth0ClientId) {
    throw new Error('You need to export a REACT_APP_AUTH0_CLIENT_ID');
  }
  if (!envVars.auth0Domain) {
    throw new Error('You need to export a REACT_APP_AUTH0_DOMAIN');
  }
  return envVars;
}
