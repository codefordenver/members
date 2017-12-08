[![Stories in Ready](https://badge.waffle.io/codefordenver/members.png?label=ready&title=Ready)](https://waffle.io/codefordenver/members?utm_source=badge)

# members.codefordenver.com

Node.js application that connects volunteers with volunteers/projects based on their skill sets.

---

## Requirements


- [Node.js](https://nodejs.org) - version 8.4 (if you have nvm type `nvm use` in the repo to use the correct version)

Setup:
1. clone repo
2. cd into repo directory
3. Run `npm install`
4. Run `npm run setup` (this should create a new `.env.local` file in the root of the project)
5. Follow [these instructions to set up Auth0](https://github.com/graphcool/templates/tree/master/auth/auth0#3-setup-auth0) for the project.
  - NOTE: Make sure to set the _Identifier_ to `http://localhost:3000` instead of `http://localhost:8080`
6. In the newly created `.env.local` file fill in what the following values from Auth0:
- `REACT_APP_AUTH0_CLIENT_ID` as your Auth0 client id
- `REACT_APP_AUTH0_DOMAIN` and `AUTH0_DOMAIN` as your Auth0 domain
- `AUTH0_API_IDENTIFIER` as your Auth0 api identifier
7. cd into `server` and run `npm run gc -- deploy`
8. from the output from the previous command copy the `Simple API` url and add it to the `.env.local` file for variable `REACT_APP_GRAPHCOOL_API`
9. cd back to the root of the repo and run `npm start`

## Quick Start
After you've followed the set up steps listed above, you can subsequently start the app with:

```
npm start
```

## Graphcool
The [Graphcool framework](https://github.com/graphcool/framework) is used to spin up and manage the backend for this project. To use the locally installed version of the framework with your environment variables from `.env.local`, use `npm run gc -- <command>`. Run `npm run gc -- --help` to view a list of available commands.

### Create React App
The front end for this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Here are some [generated docs](./docs/CreateReactApp.md) from this project for helpful tips on how to do common things.

