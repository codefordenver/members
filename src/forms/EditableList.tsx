import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';
import './EditableList.css';

type Item = {
  id?: string;
  name: string;
};
type ItemComponentProps = {
  item: Item;
  editing: boolean;
  onDelete?(): void;
};
export type ItemComponent = React.ComponentType<ItemComponentProps>;
export type EditableListProps = {
  value: Item[];
  label: string;
  name: string;
  editing: boolean;
  onChange(value: any): void;
  allOptions?: Item[];
  allOptionsLoading?: boolean;
  createChip?(value: any): Promise<Item>;
  ItemComponent?: ItemComponent;
};

const DefaultItemComponent = ({ item, onDelete }: ItemComponentProps) => (
  <Chip className="EditableList-chip" label={item.name} onDelete={onDelete} />
);

const EditableList: React.FC<EditableListProps> = ({
  value = [],
  label,
  name,
  editing,
  onChange,
  allOptions = [],
  allOptionsLoading,
  createChip,
  ItemComponent = DefaultItemComponent
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
        onAdd={(newValue: Item) => {
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

export default EditableList;
