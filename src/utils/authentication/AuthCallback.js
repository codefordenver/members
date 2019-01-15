import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
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

class AuthCallback extends Component {
  static contextType = AuthenticationContext;

  async componentDidMount() {
    try {
      // Extract the id_token and access_token from the Auth0 federation
      // Internally, the Auth0 library search does another call to get the user profile info
      // so "parseAuthenticationResult" is async
      const authResult = await AuthService.parseAuthenticationResult();

      // Send a request to the backend to get the token used to authenticate with Graphcool
      // and create the user in the database if necessary
      const {
        data: {
          authenticateUser: { id, token }
        }
      } = await this.props.client.mutate({
        mutation: AUTHENTICATE_QUERY,
        variables: authResult
      });

      // Persist auth0 access_token, the graphcool token, the userID, and the expiry time in localstorage
      AuthService.setAuthSession(
        authResult.accessToken,
        token,
        id,
        authResult.expiresIn,
        authResult.picture
      );

      // Commit the current user to the "AuthContext" so the auth data can be used in child components
      const authData = {
        auth0AccessToken: authResult.accessToken,
        graphcoolToken: token,
        userId: id,
        expiresAt: JSON.stringify(authResult.expiresIn * 1000 + Date.now())
      };
      this.context.setAuthData(authData);

      this.props.history.replace('/');
    } catch (e) {
      this.props.history.replace('/');

      const alertMessage = error.message.includes(
        'The user already exists'
      )
        ? 'A user already exists with the provided email. Trying signing in with a different provider.'
        : error;
      alert(alertMessage);

      console.error(e);
    }
  }

  render() {
    return <CircularProgress size={25} />;
  }
}

export default withApollo(AuthCallback);
