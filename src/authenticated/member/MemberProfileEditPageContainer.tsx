import React from 'react';
import MemberProfileEditPage from './MemberProfileEditPage';
import AuthContext from '../../utils/authentication/authContext';

const MemberProfileEditPageContainer: React.SFC<any> = () => {
  return (
    <AuthContext.Consumer>
      {context => (
        <MemberProfileEditPage
          isAuthenticated={context.isAuthenticated()}
          userId={context.authData.userId}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default MemberProfileEditPageContainer;
