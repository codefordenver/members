import React from 'react';
import TextField from '@material-ui/core/TextField';
import { getUniqueId } from '../utils';

interface Props {
  value: string | null;
  label: string;
  name: string;
  editing: boolean;
  onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >;
}

const EditableText: React.SFC<Props> = ({
  value,
  label,
  name,
  editing,
  onChange
}) => {
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
      id={`editable-text-${getUniqueId()}`} // TODO: Make unique per component instance
    />
  );
};
export default EditableText;
