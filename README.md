[![Stories in Ready](https://badge.waffle.io/codefordenver/members.png?label=ready&title=Ready)](https://waffle.io/codefordenver/members?utm_source=badge)
[![Build Status](https://travis-ci.org/codefordenver/members.svg?branch=master)](https://travis-ci.org/codefordenver/members)

# members.codefordenver.com

Node.js application that connects volunteers with volunteers/projects based on their skill sets.

---

## Requirements

- [Node.js](https://nodejs.org) - version 8.4 (if you have nvm type `nvm use` in the repo to use the correct version)

Setup:
1. clone repo
2. cd into repo directory
3. Run `npm install`
    > You may also want to install a [prettier](https://prettier.io/docs/en/index.html) plugin for your editor. [Check here for setup instructions](https://prettier.io/docs/en/editors.html)
4. Follow the following instructions to set up Auth0 and the API Explorer:
    1. Visit https://auth0.com/ and create a new Auth0 account or log-in to your existing one
        > it will ask you for a tenant domain. Here you can just enter in your username as this will be used for the API endpoints of your clients.
		2. Select `API` from the side menu
		3. Select `Auth0 Management API`
		4. Select the `API Explorer` tab
		5. Select `CREATE & AUTHORIZE A TEST CLIENT`. This creates a client that can use the Management API.
		6. Select `Clients` from the side menu
		7. Select `API Explorer Client`
5. Go the the command line and run `npm run setup` (You will be asked for the `Domain`, `Client ID`, and `Client Secret` from the
		`API Explorer Client`. Paste them into the command line). This will create the `.env.local` file in the root of the project.

6. run `npm run gc -- deploy`
7. Enter in the following information in your terminal:
    ![graphcool deploy info](docs/img/setup4_graphcool_deployment_info.png)
    ![graphcool deply target name](docs/img/setup5_graphcool_target_name.png)
    ![graphcool deploy service name](docs/img/setup6_graphcool_service_name.png)
8. Enter in the `Auth URL` into your browser
9. Sign up for Graphcool
10. from the output from the previous command copy the `Simple API` url and add it to the `.env.local` file for variable `REACT_APP_GRAPHCOOL_API`
11. run `npm start`

## Quick Start
After you've followed the set up steps listed above, you can subsequently start the app with:

```
npm start
```

## Graphcool
The [Graphcool framework](https://github.com/graphcool/framework) is used to spin up and manage the backend for this project.

1. Use locally installed version of framework with environment variable from `.env.local`
  * `npm run gc -- <command>`

2. View list of available commands
  * `npm run gc -- help`

3. Deploying the backend changes
 * `npm run gc -- deploy`

4. Interactive console to test out GraphQL
 * `npm run gc -- playground`

### Create React App
The front end for this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Here are some [generated docs](./docs/CreateReactApp.md) from this project for helpful tips on how to do common things.
