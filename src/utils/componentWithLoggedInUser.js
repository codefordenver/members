import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { getAuthSession } from '../Auth';

const getLoggedInUser = gql`
  query getLoggedInUser($id: ID) {
    User(id: $id) {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
    }
  }
`;

const componentWithLoggedInUser = graphql(getLoggedInUser, {
  // skip: ownProps => { debugger; return !isAuthenticated() },
  options: {
    // fetchPolicy: "network-only",
    variables: {
      id: getAuthSession().userId || ''
    }
  }
});

export default componentWithLoggedInUser;
