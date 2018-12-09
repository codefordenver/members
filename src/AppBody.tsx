import React from 'react';
import LoggedInRoutes from './authenticated/LoggedInRoutes';
import LoggedOutRoutes from './unauthenticated/LoggedOutRoutes';
import withAuthSession from './utils/withAuthSession';

interface AppBodyProps {
  isAuthenticated: boolean;
}

const AppBody: React.SFC<AppBodyProps> = ({ isAuthenticated }) => (
  <div className="AppBody">
    {isAuthenticated ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </div>
);

export default withAuthSession(AppBody);
