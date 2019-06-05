import React from 'react';
import SkillDetails from './SkillDetails';
import { SkillPageDocument, SkillPageQuery } from '../../generated-models';
import { useQuery } from 'react-apollo-hooks';
import LoadingIndicator from '../../shared-components/LoadingIndicator';

type SkillPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const SkillPage: React.FC<SkillPageProps> = ({ match }) => {
  const { loading, error, data, refetch } = useQuery<SkillPageQuery>(
    SkillPageDocument,
    {
      variables: { id: match.params.id }
    }
  );
  if (error) return <div>Error! {error.message}</div>;
  if (loading || !data || !data.skill) return <LoadingIndicator />;
  refetch(); // Refresh on page render so the data isn't stale

  return <SkillDetails skill={data.skill} loading={loading} />;
};

export default SkillPage;
