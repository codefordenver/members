var fs = require('fs')
var request = require('request');

var create = function() {
	
	var makeClient = require('./makeClient.js')

	// get a token
	var options = { method: 'POST',
		url: 'https://' + process.env.DOMAIN + '/oauth/token',
		headers: { 'content-type': 'application/json' },
		body: { 
			grant_type: 'client_credentials',
			client_id: process.env.EXPLORER_CLIENT_ID,
			client_secret: process.env.EXPLORER_CLIENT_SECRET,
			audience: 'https://' + process.env.DOMAIN + '/api/v2/'
		},
		json: true 
	}

	request(options, function (error, response, body) {
		if(error) throw error; // TODO: add human readable error message for bad url/dns error.
	
		process.env.ACCESS_TOKEN = body.access_token		
		// use the management api to create a new client
		makeClient()

	});
	
}

module.exports = create;