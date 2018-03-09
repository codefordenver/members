import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { getAuthSession } from './Auth';

const getLoggedInUser = gql`
  query getLoggedInUser($id: ID) {
    user: User(id: $id) {
      id
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
  options: {
    // fetchPolicy: "network-only",
    variables: {
      id: getAuthSession().userId || ''
    }
  },
  props: ({ data: { user } }) => ({ user })
});

export default withLoggedInUser;
