import React from 'react';
import Select from 'react-select';

interface Props {
  value: any;
  label: string;
  name: string;
  editing: boolean;
  onChange: (value: any) => void;
}
type SelectOption = {
  value: string;
  label: string;
};
const options = [
  { value: 'Idea', label: 'Idea' },
  { value: 'Pitch', label: 'Pitch' },
  { value: 'Exploration', label: 'Exploration' },
  { value: 'ActiveDevelopment', label: 'Active Development' },
  { value: 'Support', label: 'Support' },
  { value: 'Inactive', label: 'Inactive' }
];
const EditableStatus: React.FC<Props> = ({
  value,
  name,
  editing,
  onChange
}) => {
  const _handleSelectionChange = (
    selectedOption?: SelectOption | SelectOption[] | null
  ) => {
    if (!selectedOption) {
      return;
    }
    if (selectedOption instanceof Array) {
      selectedOption = selectedOption[0];
    }
    onChange({
      target: { value: selectedOption.value, name }
    });
  };
  const selectValue = options.find(option => option.value === value);
  const selectProps = {
    'aria-label': 'status',
    className: 'EditableStatus',
    options: options,
    value: selectValue,
    label: selectValue,
    onChange: _handleSelectionChange,
    placeholder: 'status',
    isSearchable: true,
    menuPortalTarget: document.body
  };
  if (!editing) {
    return <h3>{(selectValue && selectValue.label) || ''}</h3>;
  }

  return (
    <div>
      <Select {...selectProps} />
    </div>
  );
};
export default EditableStatus;
