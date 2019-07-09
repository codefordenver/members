import React from 'react';
import Chip from '@material-ui/core/Chip';
import AutocompleteChip from './AutocompleteChip';
import './EditableList.css';

type MaybeItem = {
  id?: string;
  name?: string | null;
};
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
  value?: MaybeItem[] | null;
  label: string;
  name: string;
  editing?: boolean;
  onChange(value: any): void;
  allOptions?: MaybeItem[];
  allOptionsLoading?: boolean;
  createChip?(value: any): Promise<Item>;
  ItemComponent?: ItemComponent;
};

const DefaultItemComponent = ({ item, onDelete }: ItemComponentProps) => (
  <Chip className="EditableList-chip" label={item.name} onDelete={onDelete} />
);

function filterOutNonNamed(items: MaybeItem[]) {
  return items.filter(item => item.name) as Item[];
}

const EditableList: React.FC<EditableListProps> = ({
  value: maybeValue,
  label,
  name,
  editing,
  onChange,
  allOptions: maybeAllOptions,
  allOptionsLoading,
  createChip,
  ItemComponent = DefaultItemComponent
}) => {
  const value = filterOutNonNamed(maybeValue || []);
  const allOptions = filterOutNonNamed(maybeAllOptions || []);
  if (!editing) {
    return (
      <div className="EditableList">
        {value.map(item => (
          <ItemComponent
            key={item.name}
            item={item}
            editing={editing || false}
          />
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
