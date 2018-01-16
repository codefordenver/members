var request = require('request');
var fs = require('fs')
var envLocation = '.env.local'  

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
      'name': 'Auth0 Graphcool Integration',
      'identifier': 'http://localhost:3000',
      'signing_alg': 'RS256'
    },
    json: true,
  }
	
  request(options, function (error, response, body) {
    // if(error) console.log(error)
    if (error) throw new Error(error)
		
		process.env.REACT_APP_AUTH0_API_IDENTIFIER = body.identifier
		var envJson = {
			REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
			REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
			REACT_APP_AUTH0_API_IDENTIFIER: process.env.REACT_APP_AUTH0_API_IDENTIFIER,
			REACT_APP_GRAPHCOOL_API: ''
		}
    var envString = ''
    for(var k in envJson) {
      envString = envString + k + '=' + envJson[k] + '\n'
    }

    fs.writeFileSync(envLocation, envString)
  });	
	
}


module.exports = makeAPI




