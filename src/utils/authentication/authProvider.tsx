import React, { Component } from 'react';
import AuthService from './authService';
import AuthContext, { AuthContextShape, AuthData } from './authContext';

class AuthProvider extends Component<{}, AuthContextShape> {
  constructor(props: {}) {
    super(props);

    this.state = {
      authData: AuthService.getSessionAuthData(),
      isAuthenticated: this.isAuthenticated,
      setAuthData: this.setAuthData,
      isLoggingIn: false,
      setLoggingIn: this.setLoggingIn
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

  setAuthData = (authData: AuthData) => {
    this.setState({ authData });
  };

  setLoggingIn = (isLoggingIn: boolean) => {
    this.setState({ isLoggingIn });
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
