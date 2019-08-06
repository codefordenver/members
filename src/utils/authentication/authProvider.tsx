import React, { useState, useCallback } from 'react';
import AuthService from './authService';
import AuthContext, { AuthData } from './authContext';

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>(
    AuthService.getSessionAuthData()
  );
  const [isLoggingIn, setLoggingIn] = useState(false);

  const isAuthenticated = useCallback(
    () => {
      const { userId, expiresAt, auth0AccessToken, graphcoolToken } = authData;

      return AuthService.isAuthenticated(
        userId,
        expiresAt,
        auth0AccessToken,
        graphcoolToken
      );
    },
    [authData]
  );

  const authContext = {
    authData: AuthService.getSessionAuthData(),
    isAuthenticated,
    setAuthData,
    isLoggingIn,
    setLoggingIn
  };
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
