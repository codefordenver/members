import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import MemberProfile, { MemberProfileFragment } from './MemberProfile';
import withAuthSession, { AuthSession } from '../../utils/withAuthSession';
import {
  getMyUser,
  getMyUserVariables,
  getMyUser_user
} from './__generated__/getMyUser';

const userQuery = gql`
  query getMyUser($id: ID) {
    user: User(id: $id) {
      ...MemberProfileFragment
    }
  }
  ${MemberProfileFragment}
`;

type AuthSessionProps = {
  isAuthenticated: boolean;
  authSession: AuthSession;
};
type ComponentProps = {
  user?: getMyUser_user;
};

export default compose(
  withAuthSession,
  graphql<AuthSessionProps, getMyUser, getMyUserVariables, ComponentProps>(
    userQuery,
    {
      skip: ({ isAuthenticated, authSession }) => {
        return !isAuthenticated || !authSession.userId;
      },
      options: props => {
        return {
          variables: { id: props.authSession && props.authSession.userId }
        };
      },
      props: props => {
        const user: getMyUser_user | undefined =
          (props.data && props.data.user) || undefined;
        return { user };
      }
    }
  ),
  withViewPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
