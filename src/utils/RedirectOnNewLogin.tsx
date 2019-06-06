import React, { useContext, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import AuthenticationContext from './authentication/authContext';
import { GetUserDocument, GetUserQuery } from '../generated-models';
import { PAGE_URLS } from '../authenticated/LoggedInRoutes';

const RedirectOnNewLogin: React.FC<RouteComponentProps> = ({
  history,
  location
}) => {
  const authContext = useContext(AuthenticationContext);
  const [checkedIfNewUser, setCheckedIfNewUser] = useState(false);

  const { data } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: authContext.authData.userId }
  });

  if (!authContext.isAuthenticated()) {
    return null;
  }

  if (data && data.user && !checkedIfNewUser) {
    if (
      !data.user.hasCompletedWizard &&
      // Make sure we aren't already on the new page to avoid infinite redirects
      location.pathname !== PAGE_URLS.newUser
    ) {
      history.replace(PAGE_URLS.newUser);
    } else {
      setCheckedIfNewUser(true);
    }
  }
  return null;
};

export default withRouter(RedirectOnNewLogin);
