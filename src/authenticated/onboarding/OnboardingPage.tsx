import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Onboarding from './Onboarding';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useMutation } from 'react-apollo-hooks';
import { useCustomQuery } from '../../utils/hooks';
import { GET_USER } from '../member/MyProfilePage';
import {
  MemberProfileFragmentFragment,
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

const MemberEditPage: React.FC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const updateMemberMutation = useMutation<UpdateUserMutation>(
    UpdateUserDocument,
    {
      refetchQueries: ['editableUsersList']
    }
  );
  const { data } = useCustomQuery<GetUserQuery>(GET_USER, {
    variables: { id: authContext.authData.userId }
  });
  if (!data || !data.user) return null;

  return (
    <Formik
      initialValues={data.user}
      onSubmit={async (updatedMember, actions) => {
        try {
          await updateMemberMutation({
            variables: formatMemberForMutation({
              ...updatedMember,
              hasCompletedWizard: true
            })
          });
          history.push('/');
        } catch (err) {
          console.error('submitting error', err);
          actions.setSubmitting(false);
          alert(err);
        }
      }}
      render={({ values, dirty, handleChange, handleSubmit, isSubmitting }) => (
        <Form>
          <Onboarding
            user={values}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Form>
      )}
    />
  );
};

export default MemberEditPage;
