import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import NoMatchPage from '../shared-components/NoMatchPage';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />;
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedOutRoutes;
