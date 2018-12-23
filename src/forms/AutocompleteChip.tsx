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

export default class AutocompleteChip extends React.Component<
  AutocompleteChipProps
> {
  _handleSelectionChange = (
    selectedOption?: SelectOption | SelectOption[] | null
  ) => {
    if (!selectedOption) {
      return;
    }
    if (selectedOption instanceof Array) {
      selectedOption = selectedOption[0];
    }
    this.props.onAdd(selectedOption.originalOption);
  };

  _handleCreate = async (inputValue: string) => {
    const { onCreate } = this.props;
    if (!onCreate) {
      throw new Error('No onCreate provided');
    }
    const newValue = await onCreate({ name: inputValue });
    this.props.onAdd(newValue);
  };

  render() {
    const selectProps = {
      'aria-label': this.props.placeholder, // TODO: Make this more accessible
      isLoading: this.props.isLoading,
      className: 'AutocompleteChip',
      options: this.props.options.map(option => ({
        value: option.name,
        label: option.name,
        originalOption: option
      })),
      value: null,
      onChange: this._handleSelectionChange,
      onCreateOption: this._handleCreate,
      placeholder: this.props.placeholder,
      isSearchable: true,
      menuPortalTarget: document.body
    };

    return this.props.onCreate ? (
      <CreatableSelect {...selectProps} />
    ) : (
      <Select {...selectProps} />
    );
  }
}
