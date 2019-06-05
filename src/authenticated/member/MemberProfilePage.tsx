import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MemberForm from './MemberForm';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { useQuery } from 'react-apollo-hooks';
import { GetUserQuery, GetUserDocument } from '../../generated-models';

type MemberPageProps = RouteComponentProps<{ id: string }>;

const MemberPage: React.FC<MemberPageProps> = ({ match }) => {
  const { data, error, loading } = useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: match.params.id }
  });
  if (loading || !data || !data.user) return <LoadingIndicator />;
  if (error) return <div>Error! {error.message}</div>;

  return <MemberForm initialValues={data.user} />;
};

export default MemberPage;
