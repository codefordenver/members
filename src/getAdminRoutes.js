import React from 'react';
import { Route } from 'react-router-dom';
import EmailListPage from './pages/EmailListPage';
import userIsAdmin from './utils/userIsAdmin';
import AdminPage from './pages/AdminPage';

function getAdminRoutes(user) {
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
