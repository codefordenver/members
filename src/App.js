import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MemberProfile from "./MemberProfile";
import UserInfo from "./UserInfo";
import UsersList from "./UsersList";

import "./App.css";

class App extends Component {
  componentWillUpdate() {
    if (!this.props.data.user) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data: { user } } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          <Login user={user} />
          <Link to="/user-list">All Users</Link>
        </div>
        <Route exact path="/" component={MemberResources} />
        <Route
          exact
          path="/user"
          render={() => <MemberProfile user={user} />}
        />
        <Route path="/user/edit" component={UserInfo} />
        <Route path="/user-list" component={UsersList} />
      </div>
    );
  }
}

const userQuery = gql`
  query {
    user {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
    }
  }
`;

export default graphql(userQuery, {
  options: {
    fetchPolicy: "network-only"
  }
})(App);
