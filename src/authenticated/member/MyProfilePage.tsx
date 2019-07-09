import React, { useContext } from 'react';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useCustomQuery } from '../../utils/hooks';
import { GetUserQuery, GetUserDocument } from '../../generated-models';

const MemberPage: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const { data } = useCustomQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: authContext.authData.userId }
  });
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} canEdit />;
};

export default MemberPage;
