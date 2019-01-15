import React, { Component } from 'react';
import AuthService from './authService';
import AuthContext from './authContext';

class AuthProvider extends Component {
  constructor(props) {
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

  setAuthData = authData => {
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
