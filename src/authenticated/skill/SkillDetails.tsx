import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../member/UserList';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { SkillPageSkill } from '../../generated-models';

interface SkillDetailsProps {
  skill: SkillPageSkill;
  loading: boolean;
}

const SkillDetails: React.SFC<SkillDetailsProps> = ({ skill, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  const { name, usersWithSkill, projectsWithSkill } = skill;

  return (
    <div>
      <h1>Skill: {name}</h1>
      <h2>Projects that need this skill</h2>
      {projectsWithSkill && projectsWithSkill.length ? (
        <ul>
          {projectsWithSkill.map(project => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects currently specifying needing this skill</p>
      )}

      <h2>Users with skill</h2>
      <UserList users={usersWithSkill || []} loading={loading} />
    </div>
  );
};

export default SkillDetails;
