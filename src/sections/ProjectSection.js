import React from 'react';
import Button from 'material-ui/Button';
import LoadingIndicator from './LoadingIndicator';
import Title from '../forms/Title';
import Description from '../forms/Description';
// import createForm from '../utils/createForm';

class ProjectSection extends React.PureComponent {
  state = {
    formData: this.props.project || {},
    editing: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.project !== this.props.project) {
      this.setState({ formData: nextProps.project });
    }
  }

  render() {
    if (!this.props.project) {
      return <LoadingIndicator />;
    }
    const { name, description } = this.state.formData;
    const { editing } = this.state;
    const commonProps = {
      onChange: this._updateFormData,
      editing
    };
    return (
      <form onSubmit={this._submitForm}>
        <h1>
          <Title value={name} label="Title" name="name" {...commonProps} />
        </h1>
        <Description
          value={description}
          label="Description"
          name="description"
          {...commonProps}
        />

        {editing ? (
          <React.Fragment>
            <Button onClick={this._cancelEditing}>Cancel</Button>
            <Button onClick={this._submitForm}>Submit</Button>
          </React.Fragment>
        ) : (
          <Button onClick={this._startEditing}>Edit</Button>
        )}
      </form>
    );
  }

  _startEditing = () => {
    this.setState({ editing: true });
  };

  _cancelEditing = () => {
    this.setState({ editing: false, formData: this.props.project });
  };

  _submitForm = event => {
    console.log('this', this);
    if (event) {
      event.preventDefault();
    }
    this.setState({ editing: false });
    this.props.onEdit(this.state.formData);
  };

  _updateFormData = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      formData: {
        ...state.formData,
        [name]: value
      }
    }));
  };
}

export default ProjectSection;
