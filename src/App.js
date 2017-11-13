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
import { isAuthenticated, getAuthSession } from './Auth';

class App extends Component {
  render() {
    const { User } = this.props.data || {};
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          <Login user={User} />
          <Link to="/admin/onboarding">All Users</Link>
        </div>
        <Route exact path="/" component={MemberResources} />
        <Route
          exact path="/me"
          render={() => <MemberProfile user={User} />}
        />
        <Route path="/me/edit" component={MemberProfileEdit} />
        <Route path="/admin/onboarding" component={UsersList} />
      </div>
    );
  }
}

const userQuery = gql`
  query getLoggedInUser($id: ID) {
    User(id: $id) {
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
  // skip: ownProps => { debugger; return !isAuthenticated() },
  options: {
    // fetchPolicy: "network-only",
    variables: {
      id: getAuthSession().userId || ''
    }
  }
})(App);
