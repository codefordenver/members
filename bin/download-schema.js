var utils = require('graphql/utilities');
var rp = require('request-promise-native');
var fs = require('fs');

var options = {
  method: 'POST',
  url: process.env.REACT_APP_GRAPHCOOL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query: utils.introspectionQuery })
};

rp(options).then(body => {
  fs.writeFileSync('full-schema.json', body);
});
