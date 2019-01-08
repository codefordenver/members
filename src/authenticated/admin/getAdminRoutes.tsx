import React from 'react';
import { Route } from 'react-router-dom';
import EmailListPage from './EmailListPage';
import AdminPage from './AdminPage';
import userIsAdmin from '../../utils/userIsAdmin';
import { User } from '../../sharedTypes';

function getAdminRoutes(user: User) {
  return userIsAdmin(user)
    ? [
        <Route exact path="/admin" key="/admin" component={AdminPage} />,
        <Route
          exact
          path="/admin/onboarding"
          key="/admin/onboarding"
          component={EmailListPage}
        />
      ]
    : null;
}

export default getAdminRoutes;
