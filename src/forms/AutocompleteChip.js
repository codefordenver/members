import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import './AutocompleteChip.css';

export default class AutocompleteChip extends React.Component {
  _handleSelectionChange = selectedOption => {
    this.props.onAdd(selectedOption.value);
  };

  _handleCreate = inputValue => {
    this.props.onAdd(inputValue);
  };

  render() {
    return (
      <CreatableSelect
        className="AutocompleteChip"
        options={this.props.options.map(option => ({
          value: option.name,
          label: option.name
        }))}
        value={null}
        onChange={this._handleSelectionChange}
        onCreateOption={this._handleCreate}
        placeholder={this.props.placeholder}
        isSearchable
        menuPortalTarget={document.body}
      />
    );
  }
}
