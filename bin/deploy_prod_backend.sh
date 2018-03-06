#!/bin/bash

# Change to the repo root dir
cd "$(dirname "$0")" && cd ..

# Exit whole script if Ctrl+C is pressed (useful for development of this script)
trap "exit" INT

# Colorize me baby
green() { printf "\e[1;32m%b\e[0m\n" "$@"; }
yellow() { printf "\e[1;33m%b\e[0m\n" "$@"; }
red() { printf "\e[1;31m%b\e[0m\n" "$@"; }

if [ "$CI" != true ]; then
  red "This script should only ever be run in CI (i.e. on travis-ci)."
  yellow "See the .travis.yml file for the ci config"
  exit 1
fi

# Args: executable, expected_version
function verify_version {
  actual_version="$($1 --version)"
  echo "$1 version: $actual_version"

  if [ "$actual_version" != "$2" ]; then
    red "Wrong version of $1"
    red "Expected version: $2, but instead saw $actual_version"
    exit 1
  fi
}

#  Args: environment_variable, output_if_not_present
function verify_env_var_present {
  var_value=$(printenv "$1")
  # echo "var_value: $var_value"
  if [ -z "$var_value" ]; then
    red "Missing environment variable: $1"
    yellow "$1: $2"
    exit 1
  fi
}

green "Preparing to deploy the members application (server and client)"
echo ""
echo "Verifying environment executables are the right version"
verify_version node v8.9.3
verify_version npm 5.5.1
verify_version npx 9.6.0

echo ""
echo "Verifying environment variables are present"
verify_env_var_present GRAPHCOOL_TOKEN "Graphcool login token
- Found at https://console.graph.cool/<app name>/settings/authentication
- This needs to point to the prod graphcool deployment"
verify_env_var_present GRAPHCOOL_TARGET "Graphcool target for where to deploy:
- Composed of the AWS deployment region and the project id as <deployment region>/<project id>
- The project id can be found on https://console.graph.cool/<app name>/settings/general for the prod app
- See https://github.com/graphcool/framework/issues/626#issuecomment-337231782 for an example"
verify_env_var_present REACT_APP_AUTH0_CLIENT_ID "Auth0 Client ID
- Can be found by navigating to the prod auth0 client on https://manage.auth0.com/#/clients"
verify_env_var_present REACT_APP_AUTH0_DOMAIN "Auth0 Domain
- Can be found by navigating to the prod auth0 client on https://manage.auth0.com/#/clients"
verify_env_var_present REACT_APP_AUTH0_API_IDENTIFIER "Auth0 API Identifier
- This should be the deployed site url. Should be set up on https://manage.auth0.com/#/apis"
verify_env_var_present REACT_APP_GRAPHCOOL_API "Graphcool simple api
- This is the *simple api* for the production deployment of graphcool"

echo ""
green "Environment seems okay"
echo ""
yellow "Proceeding with the deployment..."

echo ""
yellow "Deploying the graphcool backend"
# The following doesn't seem like it should be necessary
# - see this issue for progress: https://github.com/graphcool/framework/issues/1225
cat <<EOF > ~/.graphcoolrc
platformToken: >-
  $GRAPHCOOL_TOKEN
EOF

if [ "$GRAPHCOOL_FORCE_DEPLOY" == true ]; then
  npm run deployProdBackend -- --force
else
  npm run deployProdBackend
fi
