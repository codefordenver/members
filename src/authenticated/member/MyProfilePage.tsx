import { compose } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import MemberProfile from './MemberProfile';
import withAuthSession, { AuthSession } from '../../utils/withAuthSession';
import { GetUserHOC, GetUserUser } from '../../generated-models';

type AuthSessionProps = {
  isAuthenticated: boolean;
  userId: string;
};

export default compose(
  withAuthSession,
  GetUserHOC<AuthSessionProps>({
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
  }),
  withViewPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
