import React from 'react';

type AuthData = {
  userId?: string;
};
type AuthContextShape = {
  authData: AuthData;
  isAuthenticated: () => boolean;
  setAuthData: () => void;
};

const AuthenticationContext = React.createContext<AuthContextShape>({
  authData: {},
  isAuthenticated: () => false,
  setAuthData: () => {}
});

export default AuthenticationContext;
