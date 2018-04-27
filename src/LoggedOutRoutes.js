import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />;
    <Route path="/projects" component={LandingPage} />;
    <Route path="/volunteers" component={LandingPage} />;
    <Route path="/me" component={LandingPage} />;
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedOutRoutes;
