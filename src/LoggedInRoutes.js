import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getAdminRoutes from './authenticated/admin/getAdminRoutes';
import MyProfilePage from './authenticated/member/MyProfilePage';
import MemberProfileEditPage from './authenticated/member/MemberProfileEditPage';
import UsersListPage from './authenticated/member/UsersListPage';
import MemberProfilePage from './authenticated/member/MemberProfilePage';
import MemberResourcesPage from './authenticated/member/MemberResourcesPage';
import FlowdockLanding from './authenticated/FlowdockLanding';
import NoMatchPage from './shared-components/NoMatchPage';
import StyleReferencePage from './authenticated/StyleReferencePage';
import withLoggedInUser from './utils/withLoggedInUser';
import ProjectsListPage from './authenticated/project/ProjectsListPage';
import SkillPage from './authenticated/skill/SkillPage';

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
    <Route exact path="/skills/:id" component={SkillPage} />
    {getAdminRoutes(user)}
    <Route component={NoMatchPage} />
  </Switch>
);

export default withLoggedInUser(LoggedInRoutes);
