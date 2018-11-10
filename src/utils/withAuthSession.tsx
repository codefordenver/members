import React from 'react';
import { withApollo, WithApolloClient } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import getDisplayName from './getDisplayName';

import {
  ACCESS_TOKEN_KEY,
  BEARER_TOKEN,
  USER_ID,
  EXPIRES_AT_KEY
} from '../constants/storageKeys';

interface AuthResult {
  expiresIn: number;
  accessToken: string;
}

function setAuthSession(
  authResult: AuthResult,
  userId: string,
  bearerToken: string
) {
  const localStorage = window.localStorage;
  const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + Date.now());
  localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
  localStorage.setItem(USER_ID, userId);
  localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
  localStorage.setItem(BEARER_TOKEN, bearerToken);
}

function getAuthSession() {
  const localStorage = window.localStorage;
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    bearerToken: localStorage.getItem(BEARER_TOKEN),
    userId: localStorage.getItem(USER_ID),
    expiresAt: JSON.parse(localStorage.getItem(EXPIRES_AT_KEY) || '0')
  };
}

export function getBearerTokenForAuthorization() {
  const localStorage = window.localStorage;
  return localStorage.getItem(BEARER_TOKEN);
}

function logout() {
  const localStorage = window.localStorage;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(EXPIRES_AT_KEY);
  localStorage.removeItem(BEARER_TOKEN);
}

function isAuthenticated() {
  const localStorage = window.localStorage;
  const expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT_KEY) || '0');
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

const componentsWithAuth: React.Component[] = [];

function handleChange() {
  componentsWithAuth.forEach(comp => comp.setState(getUpdatedState()));
}

window.addEventListener('storage', event => {
  if (process.env.NODE_ENV === 'development') {
    console.log('something happened in localStorage on another tab');
  }
  handleChange();
});

interface AuthSession {
  accessToken: string | null;
  bearerToken: string | null;
  userId: string | null;
  expiresAt: number | null;
}
interface WithAuthSessionState {
  authSession: AuthSession;
  isAuthenticated: boolean;
}
type InjectedComponentProps = {
  authSession: AuthSession;
  isAuthenticated: boolean;
  setAuthSession: (
    authResult: AuthResult,
    userId: string,
    bearerToken: string
  ) => void;
  logout: () => void;
};

export default function withAuthSession<P extends InjectedComponentProps>(
  WrappedComponent: React.ComponentType<P>
) {
  class WithAuthSession extends React.PureComponent<
    WithApolloClient<RouteComponentProps>,
    WithAuthSessionState
  > {
    static displayName = `WithAuthSession(${getDisplayName(WrappedComponent)})`;

    state: WithAuthSessionState = getUpdatedState();

    componentWillMount() {
      componentsWithAuth.push(this);
    }

    componentWillUnmount() {
      const index = componentsWithAuth.indexOf(this);
      componentsWithAuth.splice(index, 1);
    }

    render() {
      const sessionProps: InjectedComponentProps = {
        authSession: this.state.authSession,
        isAuthenticated: this.state.isAuthenticated,
        setAuthSession: this._setAuthSession,
        logout: this._logout
      };
      return <WrappedComponent {...sessionProps} {...this.props} />;
    }

    _setAuthSession = (
      authResult: AuthResult,
      userId: string,
      bearerToken: string
    ) => {
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
