import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MemberForm from './MemberForm';
import { useUserCommon } from '../../utils/commonGraphql';

type MemberPageProps = RouteComponentProps<{ id: string }>;

const MemberPage: React.FC<MemberPageProps> = ({ match }) => {
  const { data } = useUserCommon(match.params.id);
  if (!data || !data.user) return null;

  return <MemberForm initialValues={data.user} />;
};

export default MemberPage;
