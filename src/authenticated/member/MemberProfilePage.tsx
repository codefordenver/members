import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MemberForm from './MemberForm';
import { GET_USER } from './MyProfilePage';
import { useCustomQuery } from '../../utils/hooks';
import { GetUserQuery } from '../../generated-models';

type MemberPageProps = RouteComponentProps<{ id: string }>;

const MemberPage: React.FC<MemberPageProps> = ({ match }) => {
  const { data } = useCustomQuery<GetUserQuery>(GET_USER, {
    variables: { id: match.params.id }
  });
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} />;
};

export default MemberPage;
