import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import LoginAuth0 from "./LoginAuth0";
import MembersWithData from "./Members";
import "./App.css";

class App extends Component {
  _isLoggedIn = () => {
    return this.props.data.user;
  };

  _logout = () => {
    window.localStorage.removeItem("cfd-members-auth0IdToken");
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          {!this._isLoggedIn()
            ? <LoginAuth0
                clientId="Qgo5BOv5XsU60A6mFSjmZpzfTrYy8I5I"
                domain="codefordenver.auth0.com"
              />
            : <span onClick={this._logout}>Log out</span>}
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
      id
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: "network-only" } })(
  App
);
