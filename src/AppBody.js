import React from 'react';
import LoggedInRoutes from './authenticated/LoggedInRoutes';
import LoggedOutRoutes from './unauthenticated/LoggedOutRoutes';
import AuthenticationContext from './utils/authentication/authContext';

const AppBody = () => (
  <AuthenticationContext.Consumer>
    {context => {
      return (
        <div className="AppBody">
          {context.isAuthenticated() ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </div>
      );
    }}
  </AuthenticationContext.Consumer>
);

export default AppBody;
