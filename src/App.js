import React, { Component } from "react";
import { Route } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MemberProfile from "./MemberProfile";
import MemberProfileEdit from "./MemberProfileEdit";

import "./App.css";

class App extends Component {
  componentWillUpdate() {
    if (!this.props.data.user) {
      this.props.data.refetch();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          <Login user={this.props.data.user} />
        </div>
        <Route exact path="/" component={MemberResources} />
        <Route
          exact path="/user"
          render={() =>
            <MemberProfile
              user={this.props.data.user}
            />}
        />
        <Route path="/me/edit" component={MemberProfileEdit} />
      </div>
    );
  }
}

const userQuery = gql`
  query {
    user {
      id,
      name,
      picture,
      email,
      flowdockName,
      githubName,
      description,
    }
  }
`;

export default graphql(userQuery, {
  options: {
    fetchPolicy: "network-only"
  }
})(App);
