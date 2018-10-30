import React from 'react';
import TextField from '@material-ui/core/TextField';
import './EditableImageLink.css';

const EditableImageLink = ({
  value,
  label,
  name,
  editing,
  onChange,
  alt,
  defaultSrc
}) => {
  const src = value || defaultSrc;
  const img = src ? <img src={src} alt={alt || label} /> : <div />;
  if (!editing) {
    return <div className="EditableImageLink">{img}</div>;
  }

  return (
    <div className="EditableImageLink">
      <TextField
        name={name}
        label={label}
        value={value || ''}
        onChange={onChange}
        fullWidth
      />
      {img}
    </div>
  );
};
export default EditableImageLink;
