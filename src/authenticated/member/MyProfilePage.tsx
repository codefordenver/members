import React, { useContext } from 'react';
import MemberForm from './MemberForm';
import AuthenticationContext from '../../utils/authentication/authContext';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { GetUserComponent } from '../../generated-models';

const MemberPage: React.SFC = () => {
  const authContext = useContext(AuthenticationContext);

  return (
    <GetUserComponent variables={{ id: authContext.authData.userId }}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading || !data || !data.user) return <LoadingIndicator />;

        return <MemberForm initialValues={data.user} canEdit />;
      }}
    </GetUserComponent>
  );
};

export default MemberPage;
