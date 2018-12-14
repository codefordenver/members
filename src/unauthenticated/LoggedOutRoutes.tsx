import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import NoMatchPage from '../shared-components/NoMatchPage';
import AuthCallBack from '../utils/authentication/AuthCallback';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />;
    <Route exact path="/callback" component={AuthCallBack} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedOutRoutes;
