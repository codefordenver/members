import React from 'react';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';
import withAuthSession from './utils/withAuthSession';
import './AppBody.css';

const AppBody = ({ isAuthenticated }) => (
  <div className="AppBody">
    {isAuthenticated ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </div>
);

export default withAuthSession(AppBody);
