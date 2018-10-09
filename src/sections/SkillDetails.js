import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import LoadingIndicator from './LoadingIndicator';

const SkillDetails = ({ skill, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  const { name, usersWithSkill, projectsWithSkill } = skill;

  return (
    <div>
      <h1>Skill: {name}</h1>
      <h2>Projects that need this skill</h2>
      <ul>
        {projectsWithSkill.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Users with skill</h2>
      <UserList users={usersWithSkill} loading={loading} />
    </div>
  );
};

export default SkillDetails;
