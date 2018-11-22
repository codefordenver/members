import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';
import AuthService from './authService';
import AuthenticationContext from './authContext';

const AUTHENTICATE_QUERY = gql`
  mutation authenticate(
    $accessToken: String!
    $email: String!
    $name: String!
    $picture: String!
  ) {
    authenticateUser(
      accessToken: $accessToken
      email: $email
      name: $name
      picture: $picture
    ) {
      id
      token
    }
  }
`;

const GET_USER_PROFILE_QUERY = gql`
  query getLoggedInUser($id: ID) {
    user: User(id: $id) {
      name
      picture
      email
      flowdockName
      githubName
      description
      role
      skills {
        id
        name
      }
    }
  }
`;

class AuthCallback extends Component {
  static contextType = AuthenticationContext;

  async componentDidMount() {
    // Extract the id_token and access_token from the Auth0 federation
    // Internally, the Auth0 librarysearch does another call to get the user profile info
    // so "parseAuthenticationResult" is async
    const authResult = await AuthService.parseAuthenticationResult();

    // Send a request to the backend to get the token used to authenticate with Graphcool
    // and create the user in the database if necessary
    const {
      data: { id, token }
    } = await this.props.authenticate({ variables: authResult });

    // Persist auth0 access_token, the graphcool token, the userID, and the expiry time in localstorage
    AuthService.setAuthSession(
      authResult.accessToken,
      token,
      id,
      authResult.expiresIn
    );

    // Query the backend for the remainder of the user profile data
    const { data } = await this.props.userProfile({ variables: { id } });

    // Commit the current user to the "AuthContext" so the auth data can be used in child components
    const authData = {
      auth0AccessToken: authResult.accessToken,
      graphcoolToken: token,
      userId: id,
      expiresAt: JSON.stringify(authResult.expiresIn * 1000 + Date.now()),
      userProfile: data
    };
    this.context.setCurrentUser(authData);
  }

  render() {
    return <CircularProgress size={25} />;
  }
}

export default compose(
  graphql(AUTHENTICATE_QUERY, { name: 'authenticate' }),
  graphql(GET_USER_PROFILE_QUERY, { name: 'userProfile' })
)(AuthCallback);
