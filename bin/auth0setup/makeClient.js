var envLocation = '.env.local'
var dotenv = require('dotenv')
dotenv.config({path: envLocation})

var request = require('request');
var client = require('./client.js');
var makeAPI = require('./makeAPI.js')
var fs = require('fs')


// use the token to access the management API.
// create a client for the cfd project.
var makeClient = function() {
	
  var options = { 
    method: 'POST',
    url: 'https://' + process.env.DOMAIN + '/api/v2/clients',
    headers: { 
      authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
      'content-type': 'application/json'
    },
    body: client,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    // if(error) console.log(error)

		process.env.REACT_APP_AUTH0_CLIENT_ID = body.client_id
		process.env.REACT_APP_AUTH0_DOMAIN = process.env.DOMAIN
		
    makeAPI()
		
  });	
	
}

module.exports = makeClient