import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getLoggedInUser = gql`
  query getLoggedInUser($id: ID) {
    user: User(id: $id) {
      id
      et
      name
      picture
      email
      flowdockName
      githubName
      description
      role
    }
  }
`;

const withLoggedInUser = graphql(getLoggedInUser, {
  // skip: ownProps => { debugger; return !isAuthenticated() },
  options:
    // fetchPolicy: "network-only",
    // { variables: {
    // id: getAuthSession().userId || ''
    // }
    // },
    ({ newUserId }) => ({ variables: { id: newUserId || '' } }),
  props: ({ data: { user, refetch } }) => ({ user, refetch })
});

export default withLoggedInUser;
