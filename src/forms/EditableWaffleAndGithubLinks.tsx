import React from 'react';
import EditableText from './EditableText';
import { getRepoPath } from '../utils';

interface EditableWaffleAndGithubLinksProps {
  value: string | null;
  name?: string;
  label?: string;
  editing?: boolean;
  onChange?: (value: any) => void;
}

const EditableWaffleAndGithubLinks: React.SFC<
  EditableWaffleAndGithubLinksProps
> = ({
  value,
  name = 'repoName',
  label = 'GitHub Repository Name',
  editing,
  onChange = () => {}
}) => {
  if (!editing) {
    return value ? (
      <div>
        <a href={`https://github.com/${getRepoPath(value)}`}>GitHub</a>
        &nbsp;
        <a href={`https://waffle.io/${getRepoPath(value)}`}>Waffle</a>
      </div>
    ) : null;
  }

  return (
    <EditableText
      value={value}
      label={label}
      name={name}
      editing={editing}
      onChange={onChange}
    />
  );
};

export default EditableWaffleAndGithubLinks;
