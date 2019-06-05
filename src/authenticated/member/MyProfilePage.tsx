import React, { useContext } from 'react';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { useQuery } from 'react-apollo-hooks';
import { GetUserQuery, GetUserDocument } from '../../generated-models';

const MemberPage: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const { data, error, loading } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: authContext.authData.userId }
  });
  if (loading || !data || !data.user) return <LoadingIndicator />;
  if (error) return <div>Error! {error.message}</div>;

  return <MemberForm initialValues={data.user} canEdit />;
};

export default MemberPage;
