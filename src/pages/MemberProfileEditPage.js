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
    $skillsIds: [ID!]
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
      skillsIds: $skillsIds
    ) {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
      skills {
        id
        name
      }
    }
  }
`;

function prepUserForUpdate(updatedUser) {
  const skillsIds = updatedUser.skills
    .filter(skill => skill.id)
    .map(skill => skill.id);
  return {
    ...updatedUser,
    skillsIds
  };
}

export default compose(
  withLoggedInUser,
  graphql(updateUserQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedUser => {
        return mutate({ variables: prepUserForUpdate(updatedUser) });
      }
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
