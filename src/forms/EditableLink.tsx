import React from 'react';
import EditableText from './EditableText';

interface EditableLinkProps {
  value: string | null;
  name: string;
  label: string;
  linkName?: string;
  linkTarget?: string;
  editing?: boolean;
  onChange?: (value: any) => void;
}

const EditableLink: React.FunctionComponent<EditableLinkProps> = ({
  value,
  name,
  label,
  linkName,
  linkTarget,
  editing,
  onChange = () => {}
}) => {
  if (!editing) {
    return value ? <a href={linkTarget}>{linkName}</a> : null;
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

export default EditableLink;
