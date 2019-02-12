import React from 'react';

export type AuthData = {
  auth0AccessToken: string;
  graphcoolToken: string;
  userId: string;
  expiresAt: number;
};

export type AuthContextShape = {
  authData: AuthData;
  isAuthenticated: () => boolean;
  setAuthData: (authData: AuthData) => void;
  isLoggingIn: boolean;
  setLoggingIn: (isLoggingIn: boolean) => void;
};

const AuthenticationContext = React.createContext<AuthContextShape>({
  authData: {
    auth0AccessToken: '',
    graphcoolToken: '',
    userId: '',
    expiresAt: 0
  },
  isAuthenticated: () => false,
  setAuthData: () => {},
  isLoggingIn: false,
  setLoggingIn: () => {}
});

export default AuthenticationContext;
