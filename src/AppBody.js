import React from 'react';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';
import './AppBody.css';

const AppBody = ({ isLoggedIn, user }) => (
  <div className="AppBody">
    {isLoggedIn ? <LoggedInRoutes user={user} /> : <LoggedOutRoutes />}
  </div>
);

export default AppBody;
