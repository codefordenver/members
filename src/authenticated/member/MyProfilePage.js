import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import MemberProfile from './MemberProfile';
import { withAuthSession } from '../../utils';

const userQuery = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      id
      picture
      name
      description
      githubName
      flowdockName
      email
      ...Skills
    }
  }
  ${MemberProfile.fragments.skills}
`;

export default compose(
  withAuthSession,
  graphql(userQuery, {
    skip: ({ isAuthenticated, authSession }) => {
      return !isAuthenticated || !authSession.userId;
    },
    options: props => {
      return {
        variables: { id: props.authSession && props.authSession.userId }
      };
    },
    props: ({ data: { user } }) => ({ user })
  }),
  withViewPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
