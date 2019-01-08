import React from 'react';
import { compose } from 'react-apollo';
import withEditPage from '../../utils/withEditPage';
import MemberProfile from './MemberProfile';
import AuthenticationContext from '../../utils/authentication/authContext';
import { UpdateUserHOC, GetUserUser } from '../../generated-models';
import { withProfilePageData } from './MyProfilePage';

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

const MemberProfileEdit = compose(
  withProfilePageData,
  UpdateUserHOC({
    props: ({ mutate }) => ({
      onEdit: (updatedUser: GetUserUser) => {
        return mutate && mutate({ variables: prepUserForUpdate(updatedUser) });
      }
    }),
    options: {
      refetchQueries: ['editableProjectsList']
    }
  }),
  withEditPage({
    renameProps: {
      formData: 'user'
    }
  })
)(MemberProfile);

const MemberProfileEditPage: React.SFC = () => {
  return (
    <AuthenticationContext.Consumer>
      {context => (
        <MemberProfileEdit
          isAuthenticated={context.isAuthenticated()}
          userId={context.authData && context.authData.userId}
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

export default MemberProfileEditPage;
