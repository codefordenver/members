import React from 'react';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import getDisplayName from './getDisplayName';

import {
  ACCESS_TOKEN_KEY,
  BEARER_TOKEN,
  USER_ID,
  EXPIRES_AT_KEY
} from '../constants/storageKeys';

function setAuthSession(authResult, userId, bearerToken) {
  const localStorage = global.localStorage;
  const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + Date.now());
  localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
  localStorage.setItem(USER_ID, userId);
  localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
  localStorage.setItem(BEARER_TOKEN, bearerToken);
}

function getAuthSession() {
  const localStorage = global.localStorage;
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    bearerToken: localStorage.getItem(BEARER_TOKEN),
    userId: localStorage.getItem(USER_ID),
    expiresAt: localStorage.getItem(EXPIRES_AT_KEY)
  };
}

export function getBearerTokenForAuthorization() {
  const localStorage = global.localStorage;
  return localStorage.getItem(BEARER_TOKEN);
}

function logout() {
  const localStorage = global.localStorage;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(EXPIRES_AT_KEY);
  localStorage.removeItem(BEARER_TOKEN);
}

function isAuthenticated() {
  const localStorage = global.localStorage;
  const expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT_KEY));
  const userId = localStorage.getItem(USER_ID);
  const authenticated = Boolean(userId) && Date.now() < expiresAt;
  if (userId && !authenticated) {
    logout();
  }
  return authenticated;
}

function getUpdatedState() {
  return {
    authSession: getAuthSession(),
    isAuthenticated: isAuthenticated()
  };
}

const componentsWithAuth = [];

function handleChange() {
  componentsWithAuth.forEach(comp => comp.setState(getUpdatedState()));
}

window.addEventListener('storage', event => {
  if (process.env.NODE_ENV === 'development') {
    console.log('something happened in localStorage on another tab');
  }
  handleChange();
});

export default function withAuthSession(WrappedComponent) {
  class WithAuthSession extends React.PureComponent {
    static displayName = `WithAuthSession(${getDisplayName(WrappedComponent)})`;

    state = getUpdatedState();

    componentWillMount() {
      componentsWithAuth.push(this);
    }

    componentWillUnmount() {
      const index = componentsWithAuth.indexOf(this);
      componentsWithAuth.splice(index, 1);
    }

    render() {
      const sessionProps = {
        authSession: this.state.authSession,
        isAuthenticated: this.state.isAuthenticated,
        setAuthSession: this._setAuthSession,
        logout: this._logout
      };
      return <WrappedComponent {...sessionProps} {...this.props} />;
    }

    _setAuthSession = (authResult, userId, bearerToken) => {
      setAuthSession(authResult, userId, bearerToken);
      handleChange();
      this.props.client.resetStore();
    };

    _logout = () => {
      logout();
      handleChange();
      this.props.history.push('/');
      this.props.client.resetStore();
    };
  }

  return withApollo(withRouter(WithAuthSession));
}
