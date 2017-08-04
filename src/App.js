import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import gql from "graphql-tag";
import { ApolloProvider, graphql } from "react-apollo";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://api.graph.cool/simple/v1/cj5iz3htl74ms012245dwlq4t"
  })
});

const Member = ({ data }) => {
  console.log(data.allMembers);
  return (
    <div>
      {JSON.stringify(data.allMembers)}
    </div>
  );
};

Member.defaultProps = {
  members: []
};

const MembersWithData = graphql(
  gql`
    query members {
      allMembers {
        email
      }
    }
  `,
  { options: () => ({}) }
)(Member);

class App extends Component {
  createClient() {
    return client;
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <MembersWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
