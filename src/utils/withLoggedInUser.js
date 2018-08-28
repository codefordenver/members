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
    }
  }
`;

const withLoggedInUser = compose(
  withAuthSession,
  graphql(getLoggedInUser, {
    skip: ({ isAuthenticated, authSession, ...props }) => {
      console.log(
        `isAuthenticated: ${isAuthenticated} authSession.userId: ${
          authSession.userId
        }`
      );
      return !isAuthenticated || !authSession.userId;
    },
    options: ({ authSession }) => ({
      // fetchPolicy: "network-only",
      variables: {
        id: authSession.userId
      }
    }),
    props: data => {
      console.log(data);
      return { user: data.user };
    }
  })
);

export default withLoggedInUser;
