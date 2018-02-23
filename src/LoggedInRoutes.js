import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MemberProfile from './sections/MemberProfile';
import MemberResourcesPage from './pages/MemberResourcesPage';
import MemberProfileEditPage from './pages/MemberProfileEditPage';
import EmailListPage from './pages/EmailListPage';
import UsersListPage from './pages/UsersListPage';
import MemberProfilePage from './pages/MemberProfilePage';
import ProjectPage from './pages/ProjectPage';
import ProjectsListPage from './pages/ProjectsListPage';
import NoMatchPage from './pages/NoMatchPage';

const LoggedInRoutes = ({ user }) => (
  <Switch>
    <Route exact path="/" component={MemberResourcesPage} />
    <Route exact path="/me" render={() => <MemberProfile user={user} />} />
    <Route exact path="/me/edit" component={MemberProfileEditPage} />
    <Route exact path="/admin/onboarding" component={EmailListPage} />
    <Route exact path="/volunteers" component={UsersListPage} />
    <Route exact path="/volunteers/:id" component={MemberProfilePage} />
    <Route exact path="/projects" component={ProjectsListPage} />
    <Route exact path="/projects/:id" component={ProjectPage} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedInRoutes;
