import React from 'react';

const AuthenticationContext = React.createContext({
  authData: {},
  isAuthenticated: () => {},
  setCurrentUser: () => {}
});

export default AuthenticationContext;
