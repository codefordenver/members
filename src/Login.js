import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LoginAuth0 from "./LoginAuth0";
import { logout } from './Auth';

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

  _logout() {
    logout();
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    if (!this.props.user) {
      return (
        <LoginAuth0
          clientId={clientId}
          domain={domain}
        />
      );
    } else {
      return (
        <div>
          <button onClick={this._logout}>Log out</button>
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
