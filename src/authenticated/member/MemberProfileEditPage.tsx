import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { useQuery, useMutation } from 'react-apollo-hooks';
import {
  MemberProfileFragmentFragment,
  GetUserDocument,
  GetUserQuery,
  UpdateUserMutation,
  UpdateUserDocument
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

const MemberEditPage: React.FC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const updateMemberMutation = useMutation<UpdateUserMutation>(
    UpdateUserDocument,
    {
      refetchQueries: ['editableUsersList']
    }
  );
  const { data, error, loading } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: authContext.authData.userId }
  });
  if (error) return <div>Error! {error.message}</div>;
  if (loading || !data || !data.user) return <LoadingIndicator />;

  const { user } = data;

  return (
    <MemberForm
      initialValues={user}
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
};

export default MemberEditPage;
