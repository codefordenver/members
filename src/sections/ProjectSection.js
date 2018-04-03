import React from 'react';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';

const ProjectSection = ({ project, editing, onFormDataChange }) => {
  const { name, description } = project;
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
    </React.Fragment>
  );
};

export default ProjectSection;
