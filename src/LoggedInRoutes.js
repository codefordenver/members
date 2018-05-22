import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getAdminRoutes from './getAdminRoutes';
import MyProfilePage from './pages/MyProfilePage';
import MemberResourcesPage from './pages/MemberResourcesPage';
import MemberProfileEditPage from './pages/MemberProfileEditPage';
import UsersListPage from './pages/UsersListPage';
import MemberProfilePage from './pages/MemberProfilePage';
import ProjectPage from './pages/ProjectPage';
import ProjectEditPage from './pages/ProjectEditPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectCreatePage from './pages/ProjectCreatePage';
import FlowdockRedirect from './pages/FlowdockRedirect';
import NoMatchPage from './pages/NoMatchPage';
import StyleReferencePage from './pages/StyleReferencePage';
import withLoggedInUser from './utils/withLoggedInUser';

const LoggedInRoutes = ({ user }) => (
  <Switch>
    <Route exact path="/" component={MemberResourcesPage} />
    <Route exact path="/me" component={MyProfilePage} />
    <Route exact path="/me/edit" component={MemberProfileEditPage} />
    <Route exact path="/flowdock" component={FlowdockRedirect} />
    <Route exact path="/volunteers" component={UsersListPage} />
    <Route exact path="/volunteers/:id" component={MemberProfilePage} />
    <Route exact path="/projects" component={ProjectsListPage} />
    <Route exact path="/projects/create" component={ProjectCreatePage} />
    <Route exact path="/projects/:id" component={ProjectPage} />
    <Route exact path="/projects/:id/edit" component={ProjectEditPage} />
    <Route exact path="/styles" component={StyleReferencePage} />
    {getAdminRoutes(user)}
    <Route component={NoMatchPage} />
  </Switch>
);

export default withLoggedInUser(LoggedInRoutes);
