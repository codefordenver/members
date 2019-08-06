import React, { useContext, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import DrawerLayout from './DrawerLayout';
import DrawerContent from './DrawerContent';
import getAdminRoutes from './admin/getAdminRoutes';
import MyProfilePage from './member/MyProfilePage';
import MemberProfileEditPage from './member/MemberEditPage';
import UsersListPage from './member/UsersListPage';
import MemberProfilePage from './member/MemberProfilePage';
import MemberResourcesPage from './member/MemberResourcesPage';
import FlowdockLanding from './FlowdockLanding';
import NoMatchPage from '../shared-components/NoMatchPage';
import StyleReferencePage from './StyleReferencePage';
import ProjectsListPage from './project/ProjectsListPage';
import ProjectPage from './project/ProjectPage';
import ProjectEditPage from './project/ProjectEditPage';
import ProjectCreatePage from './project/ProjectCreatePage';
import SkillPage from './skill/SkillPage';
import AuthenticationContext from '../utils/authentication/authContext';
import OnboardingPage from './onboarding/OnboardingPage';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import { useUserCommon } from '../utils/commonGraphql';

export const PAGE_URLS = {
  newUser: '/new'
};

const LoggedInRoutes = () => {
  const authContext = useContext(AuthenticationContext);
  const { data } = useUserCommon(authContext.authData.userId);

  return (
    <DrawerLayout drawer={<DrawerContent />}>
      {!data || !data.user ? null : (
        <Suspense fallback={<LoadingIndicator />}>
          <Switch>
            <Route exact path="/" component={MemberResourcesPage} />
            <Route exact path="/me" component={MyProfilePage} />
            <Route exact path="/me/edit" component={MemberProfileEditPage} />
            <Route exact path="/flowdock" component={FlowdockLanding} />
            <Route exact path="/volunteers" component={UsersListPage} />
            <Route exact path="/volunteers/:id" component={MemberProfilePage} />
            <Route path="/projects/create" component={ProjectCreatePage} />
            <Route path="/projects/:id/edit" component={ProjectEditPage} />
            <Route path="/projects/:id" component={ProjectPage} />
            <Route path="/projects" component={ProjectsListPage} />
            <Route exact path="/styles" component={StyleReferencePage} />
            <Route exact path="/skills/:id" component={SkillPage} />
            <Route exact path={PAGE_URLS.newUser} component={OnboardingPage} />

            {getAdminRoutes(data.user)}
            <Route component={NoMatchPage} />
          </Switch>
        </Suspense>
      )}
    </DrawerLayout>
  );
};

export default LoggedInRoutes;
