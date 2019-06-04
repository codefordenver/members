import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Onboarding from './Onboarding';
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
              <Formik
                initialValues={data.user}
                onSubmit={async (updatedMember, actions) => {
                  try {
                    await updateMemberMutation({
                      variables: formatMemberForMutation(updatedMember)
                    });
                    history.push('/');
                  } catch (err) {
                    console.error('submitting error', err);
                    actions.setSubmitting(false);
                    alert(err);
                  }
                }}
                render={({
                  values,
                  dirty,
                  handleChange,
                  handleSubmit,
                  isSubmitting
                }) => (
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
          }}
        </GetUserComponent>
      )}
    </UpdateUserComponent>
  );
};

export default MemberEditPage;
