import React from 'react';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import ProjectIssues from './ProjectIssues';

const ProjectSection = ({ project, editing, onFormDataChange }) => {
  const { name, description, cfapiProjectId } = project;
  const commonProps = {
    onChange: onFormDataChange,
    editing
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
      {editing ? (
        <EditableText
          value={cfapiProjectId}
          label="CfA API Project ID"
          name="cfapiProjectId"
          {...commonProps}
        />
      ) : (
        cfapiProjectId && <ProjectIssues cfapiProjectId={cfapiProjectId} />
      )}
    </React.Fragment>
  );
};

export default ProjectSection;
