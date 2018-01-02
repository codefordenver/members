import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MemberProfile from "./MemberProfile";
import MemberProfileEdit from "./MemberProfileEdit";
import UsersList from "./UsersList";
import "./App.css";
import { componentWithLoggedInUser } from './utils';

class App extends Component {
  render() {
    const { User } = this.props.data || {};
    return (
      <div className="App">
        <div className="App-header">
          <a href="/">
            <img className="cfd-logo" src="images/cfd-circle-white.png" />
          </a>
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

export default componentWithLoggedInUser(App);
