import React from 'react';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import ProjectIssues from './ProjectIssues';

const ProjectSection = ({ Project, loading }) => {
  if (loading) return '';
  const { name, description, cfapiProjectId } = Project;
  const commonProps = {
    onChange: null,
    editing: false
  };
  return (
    <React.Fragment>
      <h1>
        <EditableText value={name} label="Title" name="name" {...commonProps} />
      </h1>
      <EditableMarkdown
        value={description}
        label="Description"
        name="description"
        {...commonProps}
      />
      {commonProps.editing ? (
        <EditableText
          value={cfapiProjectId}
          label="CfA API Project ID"
          name="cfapiProjectId"
          {...commonProps}
        />
      ) : (
        <ProjectIssues repoName={name} />
      )}
    </React.Fragment>
  );
};

export default ProjectSection;
