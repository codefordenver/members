import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';

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
    return value.map(option => <Chip key={option.name} label={option.name} />);
  }

  if (editing) {
    const optionSet = new Set(value.map(option => option.name));
    return (
      <div>
        {value.map(option => (
          <Chip
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
