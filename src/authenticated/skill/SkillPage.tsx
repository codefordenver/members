import React from 'react';
import SkillDetails from './SkillDetails';
import { SkillPageQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';
import gql from 'graphql-tag';

type SkillPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const SKILL_PAGE = gql`
  query skillPage($id: ID) {
    skill: Skill(id: $id) {
      id
      name
      projectsWithSkill {
        id
        name
      }
      usersWithSkill {
        id
        name
        picture
      }
    }
  }
`;

const SkillPage: React.FC<SkillPageProps> = ({ match }) => {
  const { data, refetch } = useCustomQuery<SkillPageQuery>(SKILL_PAGE, {
    variables: { id: match.params.id }
  });
  if (!data || !data.skill) return null;
  refetch(); // Refresh on page render so the data isn't stale

  return <SkillDetails skill={data.skill} />;
};

export default SkillPage;
