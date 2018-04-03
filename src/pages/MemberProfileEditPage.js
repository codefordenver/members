import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withEditPage from '../utils/withEditPage';
import MemberProfile from '../sections/MemberProfile';
import { withLoggedInUser } from '../utils';

const updateUserQuery = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $githubName: String
    $flowdockName: String
    $description: String
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
    ) {
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

export default compose(
  withLoggedInUser,
  graphql(updateUserQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedUser => mutate({ variables: updatedUser })
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
