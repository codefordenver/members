var envLocation = '.env.local'
var dotenv = require('dotenv')
dotenv.config({path: envLocation})

var fs = require('fs')
var request = require("request");
var makeClient = require('./makeClient.js')


// add an assert statement. double check that the env file exists. throw and error if it doesn't exist.


// get a token
var options = { method: 'POST',
  url: 'https://' + process.env.DOMAIN + '/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'client_credentials',
     client_id: process.env.EXPLORER_CLIENT_ID,
     client_secret: process.env.EXPLORER_CLIENT_SECRET,
     audience: 'https://' + process.env.DOMAIN + '/api/v2/' 
	 },
	json: true 
}


request(options, function (error, response, body) {
  
	if(error) throw error; // TODO: add human readable error message for bad url/dns error.
	
	
	// overwrite .env file with access token
	var envFile = fs.readFileSync(envLocation, 'utf8')
	var envJson = dotenv.parse(envFile)
	envJson.ACCESS_TOKEN = body.access_token
	var envString = ''
	
	for(var k in envJson) {
		envString = envString + k + '=' + envJson[k] + '\n'
	}
	fs.writeFileSync(envLocation, envString)

	// use the management api to create a new client
  makeClient(body.access_token)

});



