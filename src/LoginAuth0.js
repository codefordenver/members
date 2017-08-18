import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import Auth0Lock from "auth0-lock";

//
const createUserQuery = gql`
  mutation($idToken: String!, $name: String!, $email: String!) {
    createUser(
      authProvider: { auth0: { idToken: $idToken } }
      name: $name
      email: $email
    ) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id
    }
  }
`;


class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
    this.createUser = props.createUser;
    this._lock = new Auth0Lock(props.clientId, props.domain);
  }

  componentDidMount() {

    //localStorage is being set after the request is sent to check if a user is in DB.
    this._lock.on("authenticated", (authResult) => {

      window.localStorage.setItem("cfd-members-auth0IdToken", authResult.idToken);

      this._lock.getUserInfo(authResult.accessToken,  ( error, profile) => {

        const { name, email } = profile;
        const idToken = authResult.accessToken;
        console.log(idToken);
        this.createUser({
          variables: {
            idToken, name, email
          }
        });

        this.props.history.push({
          pathname: '/signup',
          state: { user: profile}
        })

      })
    });
  }

  _showLogin = () => {
    this._lock.show();
  };

  render() {
    return <span onClick={this._showLogin}>Log in with Auth0</span>;
  }
}

export default compose(
  graphql(createUserQuery, { name: 'createUser' }),
  graphql(userQuery),
)(withRouter(LoginAuth0));
