import React from 'react';
import EditableText from '../../forms/EditableText';
import EditableMarkdown from '../../forms/EditableMarkdown';
import EditableStatus from '../../forms/EditableStatus';
import EditableSkills from '../../forms/EditableSkills';
import EditableUsers from '../../forms/EditableUsers';
import EditableImageLink from '../../forms/EditableImageLink';
import EditableLink from '../../forms/EditableLink';
import { ProjectSectionFieldsFragment } from '../../generated-models';
import { getRepoPath } from '../../utils';

interface ProjectSectionProps {
  project: ProjectSectionFieldsFragment;
  editing: boolean;
  onFormDataChange: (value: any) => void;
}

const ProjectSection: React.SFC<ProjectSectionProps> = ({
  project,
  editing,
  onFormDataChange
}) => {
  const {
    name,
    description,
    skills,
    champions,
    repoName,
    headerImage,
    boardUrl,
    status
  } = project;
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
      <h2>Current Status</h2>
      <EditableStatus
        value={status}
        label="Status"
        name="status"
        {...commonProps}
      />
      <h2>Project Champions</h2>
      <EditableUsers
        value={champions}
        name="champions"
        label="Add Champion"
        {...commonProps}
      />
      <h2>Skills Needed</h2>
      <EditableSkills
        value={skills}
        name="skills"
        label="Add Skill"
        {...commonProps}
      />
      {editing || (repoName && <h2>Links</h2>)}
      <EditableLink
        value={repoName}
        linkName="Github"
        name="repoName"
        label="GitHub Repository Name"
        linkTarget={`https://github.com/${getRepoPath(repoName || '')}`}
        {...commonProps}
      />{' '}
      <EditableLink
        value={boardUrl}
        linkName="Project Board"
        name="boardUrl"
        label="Project Board URL"
        linkTarget={boardUrl || ''}
        {...commonProps}
      />
    </React.Fragment>
  );
};

export default ProjectSection;
