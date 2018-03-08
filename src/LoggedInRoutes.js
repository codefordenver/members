import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getAdminRoutes from './getAdminRoutes';
import MemberProfile from './sections/MemberProfile';
import MemberResourcesPage from './pages/MemberResourcesPage';
import MemberProfileEditPage from './pages/MemberProfileEditPage';
import UsersListPage from './pages/UsersListPage';
import MemberProfilePage from './pages/MemberProfilePage';
import ProjectPage from './pages/ProjectPage';
import ProjectEditPage from './pages/ProjectEditPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectCreatePage from './pages/ProjectCreatePage';
import NoMatchPage from './pages/NoMatchPage';

const LoggedInRoutes = ({ user }) => (
  <Switch>
    <Route exact path="/" component={MemberResourcesPage} />
    <Route exact path="/me" render={() => <MemberProfile user={user} />} />
    <Route exact path="/me/edit" component={MemberProfileEditPage} />
    <Route exact path="/volunteers" component={UsersListPage} />
    <Route exact path="/volunteers/:id" component={MemberProfilePage} />
    <Route exact path="/projects" component={ProjectsListPage} />
    <Route exact path="/projects/create" component={ProjectCreatePage} />
    <Route exact path="/projects/:id" component={ProjectPage} />
    <Route exact path="/projects/:id/edit" component={ProjectEditPage} />
    {getAdminRoutes(user)}
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedInRoutes;
