var fs = require('fs')
var dotenv = require('dotenv')
dotenv.config({path: '.sample-env'})
var prompt = require('prompt')
var create = require('./create.js')
var makeClient = require('./makeClient.js')
var makeAPI = require('./makeAPI.js')

var envLocation = '.env.local'


var getUserInfo = function() {
  prompt.get(['DOMAIN', 'EXPLORER_CLIENT_ID', 'EXPLORER_CLIENT_SECRET'], function (err, result) {
    if (err) { return onErr(err); }
		
    process.env.DOMAIN = result.DOMAIN
    process.env.EXPLORER_CLIENT_ID = result.EXPLORER_CLIENT_ID
    process.env.EXPLORER_CLIENT_SECRET = result.EXPLORER_CLIENT_SECRET

    create()
      .then(makeClient)
      .then(makeAPI)
      .then(function(){
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
      })
		
    // var createResult = create()
    // var makeClientResult = createResult.then(makeClient)
    // var makeAPIResult = makeClientResult.then(makeAPI)
    // makeAPIResult.then(function(){
    // // Take created environment variables and save to .env.local
    // var envJson = {
    // REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    // REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
    // REACT_APP_AUTH0_API_IDENTIFIER: process.env.REACT_APP_AUTH0_API_IDENTIFIER,
    // REACT_APP_GRAPHCOOL_API: ''
    // }
    // var envString = ''
    // for(var k in envJson) {
    // envString = envString + k + '=' + envJson[k] + '\n'
    // }

    // fs.writeFileSync(envLocation, envString)			
    // })
		
  });	
}

// If .env.local exists, ask the user whether they want to overwrite the file or not.
if(fs.existsSync(process.cwd() + '/.env.local')) {

  var promptarray = [{'description': 'A .env.local file was found. Do you want to overwrite it? [y/n]', name: 'overwrite'}]
  prompt.start()
  prompt.get(promptarray, function(err,result){
    if(err) { return onErr(err) }
		
    if(result.overwrite == 'y') {
      // TODO? - Read from .env.local and save the REACT_APP_GRAPHCOOL_API variable to the current environment.
			
      getUserInfo()
    }
		
  })
} else {
  getUserInfo()
}


function onErr(err) {
  // console.log(err);
  throw new Error(err)
  // return 1;
}