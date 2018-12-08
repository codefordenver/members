import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withAuthSession from './withAuthSession';

export const getLoggedInUser = gql`
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
      skills {
        id
        name
      }
      projectsChampioned {
        id
        name
      }
    }
  }
`;

const withLoggedInUser = compose(
  withAuthSession,
  graphql(getLoggedInUser, {
    skip: ({ isAuthenticated, authSession }) => {
      return !isAuthenticated || !authSession.userId;
    },
    options: ({ authSession }) => ({
      variables: {
        id: authSession.userId
      }
    }),
    props: ({ data: { user } }) => ({ user })
  })
);

export default withLoggedInUser;
