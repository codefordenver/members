import { compose } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile from './MemberProfile';
import { withLoggedInUser } from '../../utils';
import { UpdateUserHOC, GetUserUser } from '../../generated-models';

function prepUserForUpdate(updatedUser: GetUserUser) {
  const skillsIds =
    updatedUser.skills && updatedUser.skills.map(skill => skill.id);
  const projectsChampionedIds =
    updatedUser.projectsChampioned &&
    updatedUser.projectsChampioned.map(project => project.id);
  return {
    ...updatedUser,
    skillsIds,
    projectsChampionedIds
  };
}

export default compose(
  withLoggedInUser,
  UpdateUserHOC({
    props: ({ mutate }) => ({
      onEdit: (updatedUser: GetUserUser) => {
        return mutate && mutate({ variables: prepUserForUpdate(updatedUser) });
      }
    }),
    options: {
      refetchQueries: ['allProjects']
    }
  }),
  withEditPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);
