import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile, { MemberProfileFragment } from './MemberProfile';
import { withLoggedInUser } from '../../utils';

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
      ...MemberProfileFragment
    }
  }
  ${MemberProfileFragment}
`;

type User = {
  skills: Array<{ id: string }>;
};

function prepUserForUpdate(updatedUser: User) {
  const skillsIds = updatedUser.skills.map(skill => skill.id);
  return {
    ...updatedUser,
    skillsIds
  };
}

export default compose(
  withLoggedInUser,
  graphql(updateUserQuery, {
    props: ({ mutate }) => ({
      onEdit: (updatedUser: User) => {
        return mutate && mutate({ variables: prepUserForUpdate(updatedUser) });
      }
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
