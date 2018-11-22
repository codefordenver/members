import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import NoMatchPage from '../shared-components/NoMatchPage';
import AuthCallBack from '../utils/authentication/AuthCallback';
import AuthService from '../utils/authentication/authService';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />;
    <Route
      exact
      path="/callback"
      render={async props => {
        const authData = await AuthService.parseAuthenticationResult();
        return <AuthCallBack authData={authData} {...props} />;
      }}
    />
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedOutRoutes;
