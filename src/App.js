import React, { Component } from "react";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import gql from "graphql-tag";
import { ApolloProvider, graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import LoginAuth0 from "./LoginAuth0";
import MembersWithData from "./Members";
import "./App.css";

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj5iz3htl74ms012245dwlq4t"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      if (localStorage.getItem("auth0IdToken")) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem(
          "auth0IdToken"
        )}`;
      }
      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

class App extends Component {
  createClient() {
    return client;
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <div className="App">
          <div className="App-header">
            <h2>Code for Denver Members</h2>
            <LoginAuth0
              clientId="Qgo5BOv5XsU60A6mFSjmZpzfTrYy8I5I"
              domain="codefordenver.auth0.com"
            />
          </div>
          <MembersWithData />
          <MemberResources />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
