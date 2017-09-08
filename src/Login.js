import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LoginAuth0 from "./LoginAuth0";

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
if (!clientId) {
  throw new Error('You need to export a REACT_APP_AUTH0_CLIENT_ID');
}
if (!domain) {
  throw new Error('You need to export a REACT_APP_AUTH0_DOMAIN');
}

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
          clientId={clientId}
          domain={domain}
        />
      );
    } else {
      return (
        <div>
          <span onClick={this._logout}>Log out</span>
          <p>
            Hello, {this.props.user.name}
          </p>
          <Link to="/user">
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
