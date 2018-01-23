const envVars = {
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN,
  auth0ApiIdentifier:
    process.env.REACT_APP_AUTH0_API_IDENTIFIER || "http://localhost:3000",
  graphcoolApi: process.env.REACT_APP_GRAPHCOOL_API,
  routingBase: process.env.REACT_APP_CLIENT_BASE_ROUTE,
  siteUrl: process.env.REACT_APP_SITE_URL || "http://localhost:3000"
};

function makeSureVarsAreDefined() {
  const requiredEnvNameMapping = {
    auth0ClientId: "REACT_APP_AUTH0_CLIENT_ID",
    auth0Domain: "REACT_APP_AUTH0_DOMAIN",
    graphcoolApi: "REACT_APP_GRAPHCOOL_API"
  };
  Object.keys(requiredEnvNameMapping).forEach(key => {
    if (!envVars[key]) {
      let errorMessage = `You need to export a ${
        requiredEnvNameMapping[key]
      } variable`;
      if (process.env.NODE_ENV === "development") {
        errorMessage +=
          "\nCheck to make sure it is defined in the .env.local file";
      }
      throw new Error(errorMessage);
    }
  });
}

export default function() {
  makeSureVarsAreDefined();
  return envVars;
}
