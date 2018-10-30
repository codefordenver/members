import React from 'react';
import gql from 'graphql-tag';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import EditableSkills from '../forms/EditableSkills';
import EditableImageLink from '../forms/EditableImageLink';
import ProjectIssues from './ProjectIssues';

const ProjectSection = ({ project, editing, onFormDataChange }) => {
  const { name, description, skills, repoName, headerImage } = project;
  const commonProps = {
    onChange: onFormDataChange,
    editing
  };
  return (
    <React.Fragment>
      <EditableImageLink
        value={headerImage}
        label="Header image"
        alt="header image"
        name="headerImage"
        {...commonProps}
      />
      <h1>
        <EditableText value={name} label="Title" name="name" {...commonProps} />
      </h1>
      <EditableMarkdown
        value={description}
        label="Description"
        name="description"
        {...commonProps}
      />

      <h2>Skills Needed</h2>
      <EditableSkills
        value={skills}
        name="skills"
        label="Add Skill"
        {...commonProps}
      />

      {editing ? (
        <EditableText
          value={repoName}
          label="GitHub Repository Name"
          name="repoName"
          {...commonProps}
        />
      ) : (
        repoName && <ProjectIssues repoName={repoName} />
      )}
    </React.Fragment>
  );
};

ProjectSection.fragments = {
  ProjectSectionFields: gql`
    fragment ProjectSectionFields on Project {
      id
      name
      headerImage
      description
      repoName
      skills {
        id
        name
      }
    }
  `
};

export default ProjectSection;
