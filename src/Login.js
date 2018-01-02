import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LoginAuth0 from "./LoginAuth0";
import { logout } from './Auth';
import { getEnvironmentVariables } from "./utils";

const env = getEnvironmentVariables();

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
          clientId={env.auth0ClientId}
          domain={env.auth0Domain}
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
