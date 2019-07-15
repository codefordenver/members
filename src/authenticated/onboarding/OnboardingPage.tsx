import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Onboarding from './Onboarding';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useUpdateUserCommon, useUserCommon } from '../../utils/commonGraphql';

type MemberEditPageProps = RouteComponentProps;

const MemberEditPage: React.FC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const updateMemberMutation = useUpdateUserCommon();
  const { data } = useUserCommon(authContext.authData.userId);
  if (!data || !data.user) return null;

  return (
    <Formik
      initialValues={data.user}
      onSubmit={async (updatedMember, actions) => {
        try {
          await updateMemberMutation({
            ...updatedMember,
            hasCompletedWizard: true
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
