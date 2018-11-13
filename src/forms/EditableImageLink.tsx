import React from 'react';
import TextField from '@material-ui/core/TextField';
import './EditableImageLink.css';

interface Props {
  alt: string;
  defaultSrc: string;

  value: string;
  label: string;
  name: string;
  editing: boolean;
  onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >;
}

const EditableImageLink: React.SFC<Props> = ({
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
