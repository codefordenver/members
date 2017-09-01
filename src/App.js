import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MembersWithData from "./Members";

import "./App.css";

class App extends Component {

  componentWillUpdate() {
    if(!this.props.data.user){
      this.props.data.refetch()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          <Login user={this.props.data.user} />
        </div>
        <MembersWithData />
        <MemberResources />
      </div>
    );
  }
}

const userQuery = gql`
  query {
    user {
      id,
      name,
      picture
    }
  }
`;

export default graphql(userQuery, {
  options: {
    fetchPolicy: "network-only"
  }
})(App);
