var fs = require('fs')
var dotenv = require('dotenv')
var prompt = require('prompt')
dotenv.config({path: '.sample-env'})
var create = require('./create.js')


var getUserInfo = function() {
	prompt.get(['DOMAIN', 'EXPLORER_CLIENT_ID', 'EXPLORER_CLIENT_SECRET'], function (err, result) {
		if (err) { return onErr(err); }

			
		// var envFile = fs.readFileSync('.sample-env', 'utf8')
		// var envJson = dotenv.parse(envFile)
		
		process.env.DOMAIN = result.DOMAIN
		process.env.EXPLORER_CLIENT_ID = result.EXPLORER_CLIENT_ID
		process.env.EXPLORER_CLIENT_SECRET = result.EXPLORER_CLIENT_SECRET		
		
		// envJson.DOMAIN = result.DOMAIN
		// envJson.EXPLORER_CLIENT_ID = result.EXPLORER_CLIENT_ID
		// envJson.EXPLORER_CLIENT_SECRET = result.EXPLORER_CLIENT_SECRET

		// var envString = ''
		
		// for(var k in envJson) {
			// envString = envString + k + '=' + envJson[k] + '\n'
		// }
		// fs.writeFileSync('.env.local', envString)
		
		create()
		
	});	
}

// If .env.local exists, ask the user whether they want to overwrite the file or not.
if(fs.existsSync(process.cwd() + '/.env.local')) {

	var promptarray = [{'description': 'A .env.local file was found. Do you want to overwrite it? [yes/no]', name: 'overwrite'}]
	prompt.start()
	prompt.get(promptarray, function(err,result){
		if(err) { return onErr(err) }
		
		if(result.overwrite) {
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