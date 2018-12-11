import React from 'react';

const AuthenticationContext = React.createContext({
  authData: {},
  isAuthenticated: () => {},
  setAuthData: () => {}
});

export default AuthenticationContext;
