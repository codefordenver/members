import React, { useContext, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { GetUserComponent } from '../generated-models';
import AuthenticationContext from './authentication/authContext';

const RedirectOnNewLogin: React.FC<RouteComponentProps> = ({
  history,
  location
}) => {
  const authContext = useContext(AuthenticationContext);
  const [userLoaded, setUserLoaded] = useState(false);

  if (!authContext.isAuthenticated()) {
    return null;
  }

  return (
    <GetUserComponent variables={{ id: authContext.authData.userId }}>
      {({ loading, data }) => {
        if (data && data.user) {
          if (
            !userLoaded &&
            location.pathname !== '/new' &&
            !data.user.hasCompletedWizard
          ) {
            history.replace('/new');
          } else if (!userLoaded) {
            setUserLoaded(true);
          }
        }
        return null;
      }}
    </GetUserComponent>
  );
};

export default withRouter(RedirectOnNewLogin);
