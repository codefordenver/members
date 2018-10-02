import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';
import './EditableChips.css';

const EditableChips = ({
  value,
  label,
  name,
  editing,
  onChange,
  allOptions,
  allOptionsLoading,
  createChip
}) => {
  if (!editing) {
    return (
      <div className="EditableChips">
        {value.map(option => (
          <Chip
            className="EditableChips-chip"
            key={option.name}
            label={option.name}
          />
        ))}
      </div>
    );
  }

  if (editing) {
    const optionSet = new Set(value.map(option => option.name));
    return (
      <div className="EditableChips">
        {value.map(option => (
          <Chip
            className="EditableChips-chip"
            key={option.name}
            label={option.name}
            onDelete={() => {
              const newChipsData = [...value];
              const chipToDelete = newChipsData.indexOf(option);
              newChipsData.splice(chipToDelete, 1);
              onChange({
                target: {
                  value: newChipsData,
                  name
                }
              });
            }}
          />
        ))}
        <AutocompleteChip
          isLoading={allOptionsLoading}
          options={allOptions.filter(option => !optionSet.has(option.name))}
          placeholder={label}
          onAdd={newValue => {
            const newChipsData = [...value, newValue];
            onChange({
              target: {
                value: newChipsData,
                name
              }
            });
          }}
          onCreate={createChip}
        />
      </div>
    );
  }
};

EditableChips.defaultProps = {
  value: [],
  allOptions: []
};

export default EditableChips;
