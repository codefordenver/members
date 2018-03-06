import React from 'react';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';
import './AppBody.css';

const AppBody = ({ isLoggedIn }) => (
  <div className="AppBody">
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </div>
);

export default AppBody;
