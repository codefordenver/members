import React from 'react';
import TextField from 'material-ui/TextField';

const EditableText = ({ value, label, name, editing, onChange }) => {
  if (!editing) {
    return value;
  }
  if (editing) {
    return (
      <TextField
        name={name}
        label={label}
        value={value || ''}
        onChange={onChange}
        fullWidth
      />
    );
  }
};
export default EditableText;
