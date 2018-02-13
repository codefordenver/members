import React from 'react';
import { Route } from 'react-router-dom';
import MemberResources from './MemberResources';
import MemberProfile from './MemberProfile';
import MemberProfileEdit from './MemberProfileEdit';
import EmailList from './EmailList';
import UsersList from './UsersList';
import MemberProfilePage from './MemberProfilePage';

const LoggedInRoutes = ({ user }) => (
  <React.Fragment>
    <Route exact path="/" component={MemberResources} />
    <Route exact path="/me" render={() => <MemberProfile user={user} />} />
    <Route exact path="/me/edit" component={MemberProfileEdit} />
    <Route exact path="/admin/onboarding" component={EmailList} />
    <Route exact path="/volunteers" component={UsersList} />
    <Route exact path="/volunteers/:id" component={MemberProfilePage} />
  </React.Fragment>
);

export default LoggedInRoutes;
