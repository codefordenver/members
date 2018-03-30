import React from 'react';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import ProjectIssues from './ProjectIssues';

const ProjectSection = ({ project, editing, onFormDataChange }) => {
  const { name, description, cfapiProjectUrl } = project;
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
          value={cfapiProjectUrl}
          label="CfA API Project URL"
          name="cfapiProjectUrl"
          {...commonProps}
        />
      ) : (
        <ProjectIssues cfapiProjectUrl={cfapiProjectUrl} />
      )}
    </React.Fragment>
  );
};

export default ProjectSection;
