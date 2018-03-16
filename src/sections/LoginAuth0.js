import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import auth0 from 'auth0-js';
import { setAuthSession } from '../utils/Auth';
import { getEnvironmentVariables } from '../utils';
import Button from 'material-ui/Button';

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
  }

  componentDidMount() {
    const props = this.props;
    this.webAuth.parseHash(
      { hash: window.location.hash },
      (err, authResult) => {
        if (err) {
          // TODO: Handle errors
          return console.error(err);
        }
        if (!authResult || !authResult.accessToken) {
          return;
        }
        window.location.hash = '';
        // The contents of authResult depend on which authentication parameters were used.
        // It can include the following:
        // authResult.accessToken - access token for the API specified by `audience`
        // authResult.expiresIn - string with the access token's expiration time in seconds
        // authResult.idToken - ID token JWT containing user profile information
        props
          .authenticate({
            variables: {
              accessToken: authResult.accessToken
            }
          })
          .then(({ data }) => {
            const userInfo = data.authenticateUser;
            setAuthSession(authResult, userInfo.id, userInfo.token);
            this.props.refreshApp();
          });
      }
    );
  }

  _showLogin = () => {
    this.webAuth.authorize({
      audience: getEnvironmentVariables().auth0ApiIdentifier,
      redirectUri: getEnvironmentVariables().siteUrl,
      responseType: 'token',
      scope: 'openid email profile'
    });
  };

  render() {
    return (
      <Button color="secondary" onClick={this._showLogin}>
        Log In
      </Button>
    );
  }
}

const LoginAuth0WithData = compose(
  graphql(authenticateQuery, {
    name: 'authenticate'
  }),
  withRouter
)(LoginAuth0);

export default LoginAuth0WithData;
