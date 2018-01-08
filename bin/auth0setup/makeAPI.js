var envLocation = '.env.local'
var dotenv = require('dotenv')
dotenv.config({path: envLocation})

var request = require("request");
var fs = require('fs')

// create an API for the cfd project
var makeAPI = function(TOKEN) {
	
	var options = {
		method: 'POST',
		url: 'https://' + process.env.DOMAIN + '/api/v2/resource-servers',
		headers: {
			authorization: 'Bearer ' + TOKEN,
			'content-type': 'application/json'
		},
		body: {
			"name": "Auth0 Graphcool Integration",
			"identifier": "http://localhost:3000",
			"signing_alg": "RS256"
		},
		json: true,
	}
	
	request(options, function (error, response, body) {
		if(error) console.log(error)
		
		var envFile = fs.readFileSync(envLocation, 'utf8')
		var envJson = dotenv.parse(envFile)
		
		envJson.REACT_APP_AUTH0_API_IDENTIFIER = body.identifier
		
		delete envJson.DOMAIN
		delete envJson.EXPLORER_CLIENT_ID
		delete envJson.EXPLORER_CLIENT_SECRET		
		delete envJson.ACCESS_TOKEN
		
		var envString = ''
		for(var k in envJson) {
			envString = envString + k + '=' + envJson[k] + '\n'
		}
		
		fs.writeFileSync(envLocation, envString)
	});	
	
}


module.exports = makeAPI




