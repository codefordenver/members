import React, { Component } from 'react';
import AuthService from './authService';
import AuthContext, { AuthContextType } from './authContext';

type AuthProviderState = {
  authData: AuthContextType;
  isAuthenticated: () => boolean;
  setAuthData: (authData: AuthContextType) => void;
};

class AuthProvider extends Component<{}, AuthProviderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      authData: AuthService.getSessionAuthData(),
      isAuthenticated: this.isAuthenticated,
      setAuthData: this.setAuthData
    };
  }

  isAuthenticated = () => {
    const {
      userId,
      expiresAt,
      auth0AccessToken,
      graphcoolToken
    } = this.state.authData;

    return AuthService.isAuthenticated(
      userId,
      expiresAt,
      auth0AccessToken,
      graphcoolToken
    );
  };

  setAuthData = (authData: AuthContextType) => {
    this.setState({ authData });
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
