import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MemberProfile from "./MemberProfile";
import MemberProfileEdit from "./MemberProfileEdit";
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
          <h5>Code for Denver Members</h5>
        </div>
          <div className="app-icon">
            <h5>Icon</h5>
          </div>
          <div className="app-search">
            <h5>Search</h5>
          </div>
          <div className="app-signin">
            <h5>Sign In</h5>
          </div>
          <div className="app-login">
            <h5>Log In</h5>
          </div>
        <Route exact path="/" component={MemberResources} />
        <Route
          exact path="/me"
          render={() => <MemberProfile user={user} />}
        />
        <Route path="/me/edit" component={MemberProfileEdit} />
        <Route path="/admin/onboarding" component={UsersList} />
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
