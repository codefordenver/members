import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useUniqueId } from '../utils/hooks';

interface Props {
  value: string | null | undefined;
  label: string;
  name: string;
  editing: boolean;
  onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >;
}

const EditableText: React.FC<Props> = ({
  value,
  label,
  name,
  editing,
  onChange
}) => {
  const textId = useUniqueId();
  if (!editing) {
    return <div>{value || ''}</div>;
  }
  return (
    <TextField
      name={name}
      label={label}
      value={value || ''}
      onChange={onChange}
      fullWidth
      id={`editable-text-${textId}`}
    />
  );
};
export default EditableText;
