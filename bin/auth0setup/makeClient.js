var envLocation = '.env.local'
var dotenv = require('dotenv')
dotenv.config({path: envLocation})

var request = require('request');
var client = require('./client.js');
var makeAPI = require('./makeAPI.js')
var fs = require('fs')


// use the token to access the management API.
// create a client for the cfd project.
var makeClient = function(TOKEN) {
	
  var options = { 
    method: 'POST',
    url: 'https://' + process.env.DOMAIN + '/api/v2/clients',
    headers: { 
      authorization: 'Bearer ' + TOKEN,
      'content-type': 'application/json'
    },
    body: client,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    // if(error) console.log(error)
		
    // overwrite .env file with client id
    var envFile = fs.readFileSync(envLocation, 'utf8')
    var envJson = dotenv.parse(envFile) // add/replaces key/value pairs
    // var envJson = {} // creates a new set of key/value pairs		
    envJson.REACT_APP_AUTH0_CLIENT_ID = body.client_id
    envJson.REACT_APP_AUTH0_DOMAIN = process.env.DOMAIN
		
    var envString = ''
		
    for(var k in envJson) {
      envString = envString + k + '=' + envJson[k] + '\n'
    }
    fs.writeFileSync(envLocation, envString)
		
		
    makeAPI(TOKEN)
		
  });	
	
}

module.exports = makeClient