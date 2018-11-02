import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectPage from './authenticated/project/ProjectPage';
import GeneralProjectPage from './authenticated/project/GeneralProjectPage';
import ProjectEditPage from './authenticated/project/ProjectEditPage';
import ProjectCreatePage from './authenticated/project/ProjectCreatePage';

const LoggedInRoutesSidebar = () => (
  <Switch>
    <Route path="/projects/create" component={ProjectCreatePage} />
    <Route path="/projects/:id/edit" component={ProjectEditPage} />
    <Route path="/projects/:id" component={ProjectPage} />
    <Route path="/projects" component={GeneralProjectPage} />
  </Switch>
);

export default LoggedInRoutesSidebar;
