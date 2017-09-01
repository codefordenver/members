import React, {Component} from "react";
import LoginAuth0 from "./LoginAuth0";


export default class Login extends Component {

  _isLoggedIn() {
    return this.props.user;
  }

  _logout() {
    window.localStorage.removeItem("cfd-members-auth0IdToken");
    window.location.reload();
  }

  render() {
    if(!this._isLoggedIn()) {
      return (
        <LoginAuth0
          clientId="Qgo5BOv5XsU60A6mFSjmZpzfTrYy8I5I"
          domain="codefordenver.auth0.com"
        />
      )
    } else {
      return (
        <div>
          <span onClick={this._logout}>Log out</span>
          <img src={this.props.user.picture} alt="avatar"/>
          <p>
            Hello, { this.props.user.name }
          </p>
        </div>
      );
    }
  }
};
