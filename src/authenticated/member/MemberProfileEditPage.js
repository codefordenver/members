import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile from './MemberProfile';
import { withLoggedInUser } from '../../utils';

const updateUserQuery = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $githubName: String
    $flowdockName: String
    $description: String
    $skillsIds: [ID!]
    $projectsChampionedIds: [ID!]
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
      skillsIds: $skillsIds
      projectsChampionedIds: $projectsChampionedIds
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
      projectsChampioned {
        id
        name
      }
    }
  }
`;

function prepUserForUpdate(updatedUser) {
  const skillsIds = updatedUser.skills.map(skill => skill.id);
  const projectsChampionedIds = updatedUser.projectsChampioned.map(
    project => project.id
  );
  return {
    ...updatedUser,
    skillsIds,
    projectsChampionedIds
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
