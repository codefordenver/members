import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useUniqueId } from '../utils/hooks';
import './EditableImageLink.css';

interface EditableImageLinkProps {
  alt: string;
  defaultSrc?: string;

  value: string | null | undefined;
  label: string;
  name: string;
  editing: boolean;
  onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >;
}

const EditableImageLink: React.FC<EditableImageLinkProps> = ({
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
  const textId = useUniqueId();

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
        id={`editable-image-link-${textId}`}
      />
      {img}
    </div>
  );
};
export default EditableImageLink;
