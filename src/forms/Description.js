import React from 'react';
import TextField from 'material-ui/TextField';

const Description = ({ value, label, name, editing, onChange }) => {
  if (!editing) {
    return <p>{value}</p>;
  }
  if (editing) {
    return (
      <TextField
        name={name}
        label={label}
        value={value || ''}
        onChange={onChange}
        margin="normal"
        multiline
        rowsMax={100}
      />
    );
  }
};
export default Description;
