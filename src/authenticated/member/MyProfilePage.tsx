import React, { useContext } from 'react';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useUserCommon } from '../../utils/commonGraphql';

const MemberPage: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const { data } = useUserCommon(authContext.authData.userId);
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} canEdit />;
};

export default MemberPage;
