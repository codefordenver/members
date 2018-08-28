import React from 'react';
import Chip from '@material-ui/core/Chip';

const EditableChips = ({ value, label, name, editing, onChange }) => {
  if (!editing) {
    return value.map(skill => <Chip key={skill.name} label={skill.name} />);
  }
  if (editing) {
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
      </div>
    );
  }
};

EditableChips.defaultProps = {
  value: []
};

export default EditableChips;
