import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';

const EditableChips = ({
  value,
  label,
  name,
  editing,
  onChange,
  allOptions
}) => {
  if (!editing) {
    return value.map(skill => <Chip key={skill.name} label={skill.name} />);
  }
  if (editing) {
    const skillSet = new Set(value.map(skill => skill.name));
    return (
      <div>
        {value.map(skill => (
          <Chip
            key={skill.name}
            label={skill.name}
            onDelete={() => {
              const newChipData = [...value];
              const chipToDelete = newChipData.indexOf(skill);
              newChipData.splice(chipToDelete, 1);
              onChange({
                target: {
                  value: newChipData,
                  name
                }
              });
            }}
          />
        ))}
        <AutocompleteChip
          options={allOptions.filter(option => !skillSet.has(option.name))}
          placeholder={label}
          onAdd={newValue => {
            const newChipData = [...value, { name: newValue }];
            onChange({
              target: {
                value: newChipData,
                name
              }
            });
          }}
        />
      </div>
    );
  }
};

EditableChips.defaultProps = {
  value: []
};

export default EditableChips;
