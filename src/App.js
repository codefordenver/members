import React, { Component } from "react";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import gql from "graphql-tag";
import { ApolloProvider, graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import "./App.css";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://api.graph.cool/simple/v1/cj5iz3htl74ms012245dwlq4t"
  })

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      if (localStorage.getItem('auth0IdToken')) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`
      }
      next()
    },
  }])
});

const Member = ({ members }) => {
  return (
    <div>
      {members.map(member =>
        <div key={member.email}>
          {member.email}
        </div>
      )}
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
  {
    options: () => ({}),
    props: ({ data }) => {
      return { members: data.allMembers };
    }
  }
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
            <h2>Code for Denver Members</h2>
          </div>
          <MembersWithData />
          <MemberResources />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
