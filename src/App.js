import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import LoginAuth0 from "./LoginAuth0";
import MembersWithData from "./Members";
import "./App.css";

const foo = (name, email) => {
  return createMember({
    variables : {
      name,
      email
    }
  });
}

const requestMembersData = () => {
  const id_token = window.localStorage.getItem("cfd-members-auth0IdToken");
  fetch("https://codefordenver.auth0.com/tokeninfo", {
    method: "POST",
    mode: "cors",
    redirect: "follow",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      id_token
    })
  })
    .then(data => data.json())
    .then(json => {
      try {
        const f = foo(json.name, json.email);
        console.log(f);
      } catch (e) {
        console.log(e);
      }

    });
};

const createMemberQuery = gql`
  mutation($name: String!, $email: String!) {
    createMember(
      name: $name,
      email: $email
    ) {
      id
    }
  }
`
 const createMember = graphql(createMemberQuery, { name: 'createMember' })

class App extends Component {
  _isLoggedIn = () => {
    return this.props.data.user;
  };

  _logout = () => {
    window.localStorage.removeItem("cfd-members-auth0IdToken");
    window.location.reload();
  };

  render() {
    if (!this.props.data.user) {
      requestMembersData();
    }
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
};

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
let app = App;
window.app = app;
