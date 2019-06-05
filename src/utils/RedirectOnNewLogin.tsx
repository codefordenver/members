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
  const [haveCheckedIfNewUser, setHaveCheckedIfNewUser] = useState(false);

  if (!authContext.isAuthenticated()) {
    return null;
  }

  const { data } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: authContext.authData.userId }
  });

  if (data && data.user && !haveCheckedIfNewUser) {
    if (
      !data.user.hasCompletedWizard &&
      // Make sure we aren't already on the new page to avoid infinite redirects
      location.pathname !== PAGE_URLS.newUser
    ) {
      history.replace(PAGE_URLS.newUser);
    } else {
      setHaveCheckedIfNewUser(true);
    }
  }
  return null;
};

export default withRouter(RedirectOnNewLogin);
