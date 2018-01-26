var rp = require('request-promise-native');

// create an API for the cfd project
var makeAPI = function() {
  var options = {
    method: 'POST',
    url: 'https://' + process.env.DOMAIN + '/api/v2/resource-servers',
    headers: {
      authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
      'content-type': 'application/json'
    },
    body: {
      name: 'Auth0 Graphcool Integration',
      identifier: 'http://localhost:3000',
      signing_alg: 'RS256'
    },
    json: true
  };

  var result = rp(options);
  return result.then(function(body) {
    process.env.REACT_APP_AUTH0_API_IDENTIFIER = body.identifier;
  });
};

module.exports = makeAPI;
