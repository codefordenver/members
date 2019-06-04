import React, { useContext } from 'react';
import LoggedInRoutes from './authenticated/LoggedInRoutes';
import LoggedOutRoutes from './unauthenticated/LoggedOutRoutes';
import AuthenticationContext from './utils/authentication/authContext';

const AppBody: React.FC = () => {
  const authContext = useContext(AuthenticationContext);

  return (
    <div className="AppBody">
      {authContext.isAuthenticated() ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
};

export default AppBody;
