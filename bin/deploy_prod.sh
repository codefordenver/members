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
verify_version node v8.4.0
verify_version npm 5.3.0
verify_version npx 9.2.1

echo ""
echo "Verifying environment variables are present"
verify_env_var_present GRAPHCOOL_TOKEN "Graphcool login token - found at https://console.graph.cool/<app name>/settings/authentication
This needs to point to the prod graphcool deployment"
verify_env_var_present REACT_APP_AUTH0_CLIENT_ID "Can be found by navigating to the prod auth0 client on https://manage.auth0.com/#/clients"
verify_env_var_present REACT_APP_AUTH0_DOMAIN "Can be found by navigating to the prod auth0 client on https://manage.auth0.com/#/clients"
verify_env_var_present AUTH0_API_IDENTIFIER "This should be the deployed site url. Should be set up on https://manage.auth0.com/#/apis"
verify_env_var_present REACT_APP_GRAPHCOOL_API "This is the *simple api* for the production deployment of graphcool"

echo ""
green "Environment seems okay"
echo "Proceeding with the deployment..."

echo ""
echo "Deploying the graphcool backend"
npx graphcool login --token "$GRAPHCOOL_TOKEN"
(cd ./server && npx graphcool deploy)

echo ""
echo "Deploying the client"
npm run build #&& npx gh-pages -d build
