import React from 'react';

export type AuthContextType = {
  auth0AccessToken: string | null;
  graphcoolToken: string | null;
  userId: string | null;
  expiresAt: number | null;
};
type AuthContextShape = {
  authData: AuthContextType;
  isAuthenticated: () => boolean;
  setAuthData: (authData: AuthContextType) => void;
};

const AuthenticationContext = React.createContext<AuthContextShape>({
  authData: {
    auth0AccessToken: null,
    graphcoolToken: null,
    userId: null,
    expiresAt: null
  },
  isAuthenticated: () => false,
  setAuthData: () => {}
});

export default AuthenticationContext;
