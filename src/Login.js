import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LoginAuth0 from "./LoginAuth0";

class Login extends Component {
  constructor() {
    super();
    this._logout = this._logout.bind(this);
  }
  _isLoggedIn() {
    return this.props.user;
  }

  _logout() {
    this.props.history.push("/");
    window.localStorage.removeItem("cfd-members-auth0IdToken");
    window.location.reload();
  }

  render() {
    if (!this._isLoggedIn()) {
      return (
        <LoginAuth0
          clientId="Qgo5BOv5XsU60A6mFSjmZpzfTrYy8I5I"
          domain="codefordenver.auth0.com"
        />
      );
    } else {
      return (
        <div>
          <span onClick={this._logout}>Log out</span>
          <p>
            Hello, {this.props.user.name}
          </p>
          <Link to="/me">
            <img
              src={this.props.user.picture}
              alt="avatar"
              style={{ height: "40px", borderRadius: "20px" }}
            />
          </Link>
        </div>
      );
    }
  }
}

export default withRouter(Login);
