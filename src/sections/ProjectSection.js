import React from 'react';
import LoadingIndicator from './LoadingIndicator';

const ProjectPage = ({ project }) => {
  if (!project) {
    return <LoadingIndicator />;
  }
  const { name, description } = project;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProjectPage;
