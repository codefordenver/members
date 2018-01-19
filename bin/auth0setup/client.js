// this is what needs to be defined to create the client needed for the cfd project
var client = {
  'name': 'cfd_client',
  'description': 'basic client for cfd project',
  'app_type': 'spa',
  'token_endpoint_auth_method': 'none',
  'callbacks': ['http://localhost:3000'],
  'jwt_configuration': {
    'alg': 'RS256',
    'lifetime_in_seconds': 36000,
    'secret_encoded': false
  },
  'oidc_conformant': true,
  'grant_types': [
    'implicit'
  ]
}	


module.exports = client