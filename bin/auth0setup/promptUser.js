var fs = require('fs')
var dotenv = require('dotenv')
dotenv.config()
var prompt = require('prompt');

fs.writeFileSync('.env.local', '')

prompt.start();

prompt.get(['DOMAIN', 'EXPLORER_CLIENT_ID', 'EXPLORER_CLIENT_SECRET'], function (err, result) {
  if (err) { return onErr(err); }

  // overwrite .env file with access token
  var envFile = fs.readFileSync('.env.local', 'utf8')
  var envJson = dotenv.parse(envFile)
	
  envJson.DOMAIN = result.DOMAIN
  envJson.EXPLORER_CLIENT_ID = result.EXPLORER_CLIENT_ID
  envJson.EXPLORER_CLIENT_SECRET = result.EXPLORER_CLIENT_SECRET

  var envString = ''
	
  for(var k in envJson) {
    envString = envString + k + '=' + envJson[k] + '\n'
  }
  fs.writeFileSync('.env.local', envString)	


});

function onErr(err) {
  // console.log(err);
  throw new Error(err)
  // return 1;
}