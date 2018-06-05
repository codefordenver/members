import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import auth0 from 'auth0-js';
import { getEnvironmentVariables } from '../utils';
import Button from '@material-ui/core/Button';
import withAuthSession from '../utils/withAuthSession';

const authenticateQuery = gql`
  mutation authenticate($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
    this.webAuth = new auth0.WebAuth({
      domain: props.domain,
      clientID: props.clientId
    });
    this.state = {
      isLoggingIn: false
    };
  }

  componentDidMount() {
    this.webAuth.parseHash(
      { hash: window.location.hash },
      (err, authResult) => {
        window.location.hash = '';
        if (err) {
          // TODO: Handle errors better
          alert(`${err.error}: ${err.errorDescription}`);
          return console.error(err);
        }
        if (!authResult || !authResult.accessToken) {
          return;
        }
        this.setState({ isLoggingIn: true });

        // The contents of authResult depend on which authentication parameters were used.
        // It can include the following:
        // authResult.accessToken - access token for the API specified by `audience`
        // authResult.expiresIn - string with the access token's expiration time in seconds
        // authResult.idToken - ID token JWT containing user profile information

        this.props
          .authenticate({
            variables: {
              accessToken: authResult.accessToken
            }
          })
          .then(({ data }) => {
            const userInfo = data.authenticateUser;
            this.props.setAuthSession(authResult, userInfo.id, userInfo.token);
            this.setState({ isLoggingIn: false });
          });
      }
    );
  }

  _showLogin = () => {
    this.webAuth.authorize({
      audience: getEnvironmentVariables().auth0ApiIdentifier,
      redirectUri: window.location.origin,
      responseType: 'token',
      scope: 'openid email profile'
    });
  };

  render() {
    return (
      <Button
        color="secondary"
        onClick={this._showLogin}
        disabled={this.state.isLoggingIn}
      >
        Log In
        {this.state.isLoggingIn && (
          <CircularProgress size={25} color="secondary" />
        )}
      </Button>
    );
  }
}

const LoginAuth0WithData = compose(
  graphql(authenticateQuery, {
    name: 'authenticate'
  }),
  withAuthSession
)(LoginAuth0);

export default LoginAuth0WithData;
