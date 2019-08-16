import React, { useContext } from 'react';
import LoggedInRoutes from './authenticated/LoggedInRoutes';
import LoggedOutRoutes from './unauthenticated/LoggedOutRoutes';
import AuthenticationContext from './utils/authentication/authContext';
import { Container } from '@material-ui/core';

const AppBody: React.FC = () => {
  const authContext = useContext(AuthenticationContext);

  return (
    <Container className="AppBody" maxWidth="md">
      {authContext.isAuthenticated() ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </Container>
  );
};

export default AppBody;
