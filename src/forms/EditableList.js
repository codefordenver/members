import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';
import './EditableList.css';

const EditableList = ({
  value,
  label,
  name,
  editing,
  onChange,
  allOptions,
  allOptionsLoading,
  createChip,
  ItemComponent
}) => {
  if (!editing) {
    return (
      <div className="EditableList">
        {value.map(item => (
          <ItemComponent key={item.name} item={item} editing={editing} />
        ))}
      </div>
    );
  }

  const optionSet = new Set(value.map(option => option.name));
  return (
    <div className="EditableList">
      {value.map(item => (
        <ItemComponent
          key={item.name}
          item={item}
          editing={editing}
          onDelete={() => {
            const newChipsData = [...value];
            const chipToDelete = newChipsData.indexOf(item);
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
};

EditableList.defaultProps = {
  value: [],
  allOptions: [],
  ItemComponent: ({ item, onDelete }) => (
    <Chip className="EditableList-chip" label={item.name} onDelete={onDelete} />
  )
};

export default EditableList;
export const withItemComponent = ItemComponent => WrappedComponent => props => (
  <WrappedComponent {...props} ItemComponent={ItemComponent} />
);
