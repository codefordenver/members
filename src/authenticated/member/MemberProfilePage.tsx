import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MemberForm from './MemberForm';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { useCustomQuery } from '../../utils/hooks';
import { GetUserQuery, GetUserDocument } from '../../generated-models';

type MemberPageProps = RouteComponentProps<{ id: string }>;

const MemberPage: React.FC<MemberPageProps> = ({ match }) => {
  const { data } = useCustomQuery<GetUserQuery>(GetUserDocument, {
    variables: { id: match.params.id }
  });
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} />;
};

export default MemberPage;
