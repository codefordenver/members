import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import GeneralProjectPage from './pages/GeneralProjectPage';
import withLoggedInUser from './utils/withLoggedInUser';

const LoggedInRoutesSidebar = ({ user, match }) => (
  <Switch>
    <Route path={'/projects/:id'} component={ProjectPage} />
    <Route path={'/projects'} component={GeneralProjectPage} />
  </Switch>
);

export default withLoggedInUser(LoggedInRoutesSidebar);
