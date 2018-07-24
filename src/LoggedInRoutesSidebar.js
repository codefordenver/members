import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import GeneralProjectPage from './pages/GeneralProjectPage';
import withLoggedInUser from './utils/withLoggedInUser';
import ProjectEditPage from './pages/ProjectEditPage';
import ProjectCreatePage from './pages/ProjectCreatePage';

const LoggedInRoutesSidebar = ({ user, match }) => (
  <Switch>
    <Route path="/projects/create" component={ProjectCreatePage} />
    <Route path="/projects/:repoName/edit" component={ProjectEditPage} />
    <Route path="/projects/:repoName" component={ProjectPage} />
    <Route path="/projects" component={GeneralProjectPage} />
  </Switch>
);

export default withLoggedInUser(LoggedInRoutesSidebar);
