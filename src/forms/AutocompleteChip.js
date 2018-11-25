import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import './AutocompleteChip.css';

export default class AutocompleteChip extends React.Component {
  _handleSelectionChange = selectedOption => {
    this.props.onAdd(selectedOption.originalOption);
  };

  _handleCreate = async inputValue => {
    const newValue = await this.props.onCreate({ name: inputValue });
    this.props.onAdd(newValue);
  };

  render() {
    const selectProps = {
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
