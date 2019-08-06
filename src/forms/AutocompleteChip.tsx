import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import './AutocompleteChip.css';

type SimpleOption = {
  name: string;
};

type SelectOption = {
  value: string;
  label: string;
  originalOption: SimpleOption;
};

interface AutocompleteChipProps {
  isLoading?: boolean;
  onAdd: (option: SimpleOption) => void;
  onCreate?: (option: SimpleOption) => Promise<SimpleOption>;
  options: Array<SimpleOption>;
  placeholder: string;
}

const AutocompleteChip: React.FC<AutocompleteChipProps> = ({
  onAdd,
  placeholder,
  isLoading,
  options,
  onCreate
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
    onAdd(selectedOption.originalOption);
  };

  const _handleCreate = async (inputValue: string) => {
    if (!onCreate) {
      throw new Error('No onCreate provided');
    }
    const newValue = await onCreate({ name: inputValue });
    onAdd(newValue);
  };

  const selectProps = {
    'aria-label': placeholder, // TODO: Make this more accessible
    isLoading: isLoading,
    className: 'AutocompleteChip',
    options: options.map(option => ({
      value: option.name,
      label: option.name,
      originalOption: option
    })),
    value: null,
    onChange: _handleSelectionChange,
    onCreateOption: _handleCreate,
    placeholder: placeholder,
    isSearchable: true,
    menuPortalTarget: document.body
  };

  return onCreate ? (
    <CreatableSelect {...selectProps} />
  ) : (
    <Select {...selectProps} />
  );
};

export default AutocompleteChip;
