import React from 'react';
import Title from '../forms/Title';
import Description from '../forms/Description';

const ProjectSection = ({ formData, editing, onFormDataChange }) => {
  const { name, description } = formData;
  const commonProps = {
    onChange: onFormDataChange,
    editing
  };
  return (
    <React.Fragment>
      <h1>
        <Title value={name} label="Title" name="name" {...commonProps} />
      </h1>
      <Description
        value={description}
        label="Description"
        name="description"
        {...commonProps}
      />
    </React.Fragment>
  );
};

export default ProjectSection;
