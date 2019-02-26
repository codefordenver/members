import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MemberForm from './MemberForm';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { GetUserComponent } from '../../generated-models';

type MemberPageProps = RouteComponentProps<{ id: string }>;

const MemberPage: React.SFC<MemberPageProps> = ({ match }) => {
  return (
    <GetUserComponent variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading || !data || !data.user) return <LoadingIndicator />;

        return <MemberForm initialValues={data.user} />;
      }}
    </GetUserComponent>
  );
};

export default MemberPage;
