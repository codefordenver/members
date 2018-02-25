import React from 'react';
import Button from 'material-ui/Button';
import { Link, withRouter } from 'react-router-dom';
import ProjectSection from './ProjectSection';

class ProjectCreate extends React.PureComponent {
  state = {
    formData: {},
    submitting: false
  };

  render() {
    const projectSectionProps = {
      formData: this.state.formData,
      editing: true,
      onFormDataChange: this._updateFormData
    };
    return (
      <form onSubmit={this._submitForm}>
        <ProjectSection {...projectSectionProps} />

        <Button component={Link} to={`/projects`}>
          Cancel
        </Button>
        <Button onClick={this._submitForm} disabled={this.state.submitting}>
          Create
        </Button>
      </form>
    );
  }

  _submitForm = async event => {
    if (event) {
      event.preventDefault();
    }
    try {
      this.setState({ submitting: true });
      const result = await this.props.onCreate(this.state.formData);
      this.props.history.push(`/projects/${result.data.createProject.id}`);
    } catch (err) {
      this.setState({ submitting: false });
      alert(err);
    }
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

export default withRouter(ProjectCreate);
