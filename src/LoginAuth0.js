import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Auth0Lock from "auth0-lock";

class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
    this._lock = new Auth0Lock(props.clientId, props.domain);
  }

  componentDidMount() {
    //localStorage is being set after the request is sent to check if a user is in DB.
    this._lock.on("authenticated", authResult => {
      window.localStorage.setItem(
        "cfd-members-auth0IdToken",
        authResult.idToken
      );

      this._lock.getUserInfo(authResult.accessToken, (error, profile) => {
        this.props.history.push({
          pathname: '/signup',
          state: { user: profile}
        })
      })
      // window.location.reload()
    });
  }

  _showLogin = () => {
    this._lock.show();
  };

  render() {
    return <span onClick={this._showLogin}>Log in with Auth0</span>;
  }
}

export default withRouter(LoginAuth0);
