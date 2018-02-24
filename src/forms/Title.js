import React from 'react';
import TextField from 'material-ui/TextField';

const Title = ({ value, label, name, editing, onChange }) => {
  if (!editing) {
    return <p>{value}</p>;
  }
  if (editing) {
    return (
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        margin="normal"
      />
    );
  }
};
export default Title;
