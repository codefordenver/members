var rp = require('request-promise-native')

var create = function() {
	
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

  var result = rp(options)
  return result.then(function(body){
    process.env.ACCESS_TOKEN = body.access_token
  })
	
}

module.exports = create;