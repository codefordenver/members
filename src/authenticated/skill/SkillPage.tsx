import React from 'react';
import SkillDetails from './SkillDetails';
import { SkillPageDocument, SkillPageQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

type SkillPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const SkillPage: React.FC<SkillPageProps> = ({ match }) => {
  const { data, refetch } = useCustomQuery<SkillPageQuery>(SkillPageDocument, {
    variables: { id: match.params.id }
  });
  if (!data || !data.skill) return null;
  refetch(); // Refresh on page render so the data isn't stale

  return <SkillDetails skill={data.skill} />;
};

export default SkillPage;
