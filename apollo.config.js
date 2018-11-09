/* eslint-env node */

console.log('in the apollo.config.js file')
module.exports = {
  // client: {
  //   name: 'Members client',
  //   service: {
  //     name: 'graphcool-members',
  //     url: 'https://api.graph.cool/simple/v1/cjat2jtd40v4b0162qw31xmbz', // TODO: Don't hard code
  //   }
  // },

  // service: {
  //   name: 'graphcool-members',
  //   endpoint: {
  //     url: 'https://api.graph.cool/simple/v1/cjat2jtd40v4b0162qw31xmbz', // TODO: Don't hard code
  //   },
  //   localSchemaFile: './full-schema.json'
  // }

  schemas: {
    default: {
      schema: 'full-schema.json', // if not defined the an introspection query will be run
      endpoint: {
        url: 'https://api.graph.cool/simple/v1/cjat2jtd40v4b0162qw31xmbz', // if not defined the schema will be downloaded from Apollo Engine
        headers: {
          Authorization: 'Bearer asd98f7ohas;f8aowpho8efhsdlfa8ewohq3i78'
        }
      }

      // engineKey: 'my-engine-key' // use this key when connecting to Apollo Engine
    }
  },
  // queries: [ // optional if you only have one schema
  //   {
  //     schema: 'myPrimaryBackend', // reference the previously defined schema
  //     includes: [ 'src/**/*.tsx' ], // load queries from .tsx files
  //     excludes: [ 'node_modules/**' ] // don't include any matching files from node_modules
  //   }
  // ]
}
