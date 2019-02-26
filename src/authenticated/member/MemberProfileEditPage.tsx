import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import {
  GetUserComponent,
  MemberProfileFragmentFragment,
  UpdateUserComponent
} from '../../generated-models';

type MemberEditPageProps = RouteComponentProps;

function formatMemberForMutation(updatedUser: MemberProfileFragmentFragment) {
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

function getBaseUrl(history: History) {
  return history.location.pathname.split('/edit')[0];
}

const MemberEditPage: React.SFC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);

  return (
    <UpdateUserComponent refetchQueries={['editableUsersList']}>
      {updateMemberMutation => (
        <GetUserComponent variables={{ id: authContext.authData.userId }}>
          {({ loading, error, data }) => {
            if (error) return `Error! ${error.message}`;
            if (loading || !data || !data.user) return <LoadingIndicator />;

            return (
              <MemberForm
                initialValues={data.user}
                editing
                onSubmit={async (updatedMember, actions) => {
                  try {
                    await updateMemberMutation({
                      variables: formatMemberForMutation(updatedMember)
                    });
                    history.push(getBaseUrl(history));
                  } catch (err) {
                    console.error('submitting error', err);
                    actions.setSubmitting(false);
                    alert(err);
                  }
                }}
              />
            );
          }}
        </GetUserComponent>
      )}
    </UpdateUserComponent>
  );
};

export default MemberEditPage;
