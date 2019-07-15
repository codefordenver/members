import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useUserCommon, useUpdateUserCommon } from '../../utils/commonGraphql';
import MemberForm from './MemberForm';

type MemberEditPageProps = RouteComponentProps;

function getBaseUrl(history: History) {
  return history.location.pathname.split('/edit')[0];
}

const MemberEditPage: React.FC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const updateMemberMutation = useUpdateUserCommon();
  const { data } = useUserCommon(authContext.authData.userId);
  if (!data || !data.user) return null;

  return (
    <MemberForm
      initialValues={data.user}
      editing
      onSubmit={async (updatedMember, actions) => {
        try {
          await updateMemberMutation(updatedMember);
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
