import React from 'react';
import { compose } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import MemberProfile from './MemberProfile';
import AuthenticationContext from '../../utils/authentication/authContext';
import { GetUserHOC, GetUserUser } from '../../generated-models';

type AuthSessionProps = {
  isAuthenticated: boolean;
  userId: string;
};

export const withProfilePageData = GetUserHOC<AuthSessionProps>({
  skip: ({ isAuthenticated, userId }) => {
    return !isAuthenticated || !userId;
  },
  options: props => {
    return {
      variables: { id: props.userId }
    };
  },
  props: props => {
    const user: GetUserUser | undefined =
      (props.data && props.data.user) || undefined;
    return { user };
  }
});

const ProfilePage = compose(
  withProfilePageData,
  withViewPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);

const MyProfilePage: React.SFC = () => {
  return (
    <AuthenticationContext.Consumer>
      {context => (
        <ProfilePage
          isAuthenticated={context.isAuthenticated()}
          userId={context.authData && context.authData.userId}
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

export default MyProfilePage;
