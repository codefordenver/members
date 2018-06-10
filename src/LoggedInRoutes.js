import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getAdminRoutes from './getAdminRoutes';
import MyProfilePage from './pages/MyProfilePage';
import MemberProfileEditPage from './pages/MemberProfileEditPage';
import UsersListPage from './pages/UsersListPage';
import MemberProfilePage from './pages/MemberProfilePage';
import FlowdockLanding from './pages/FlowdockLanding';
import NoMatchPage from './pages/NoMatchPage';
import StyleReferencePage from './pages/StyleReferencePage';
import withLoggedInUser from './utils/withLoggedInUser';
import MemberResourcesPage from './pages/MemberResourcesPage';
import ProjectsListPage from './pages/ProjectsListPage';

const LoggedInRoutes = ({ user }) => (
  <Switch>
    <Route exact path="/" component={MemberResourcesPage} />
    <Route exact path="/me" component={MyProfilePage} />
    <Route exact path="/me/edit" component={MemberProfileEditPage} />
    <Route exact path="/flowdock" component={FlowdockLanding} />
    <Route exact path="/volunteers" component={UsersListPage} />
    <Route exact path="/volunteers/:id" component={MemberProfilePage} />
    <Route path="/projects" component={ProjectsListPage} />
    <Route exact path="/styles" component={StyleReferencePage} />
    {getAdminRoutes(user)}
    <Route component={NoMatchPage} />
  </Switch>
);

export default withLoggedInUser(LoggedInRoutes);
