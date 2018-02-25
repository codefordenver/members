import React from 'react';
import Button from 'material-ui/Button';
import { Link, withRouter } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import ProjectSection from './ProjectSection';

class ProjectEdit extends React.PureComponent {
  state = {
    formData: this.props.project || {},
    submitting: false
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
    const { id } = this.state.formData;
    const projectSectionProps = {
      formData: this.state.formData,
      editing: true,
      onFormDataChange: this._updateFormData
    };
    return (
      <form onSubmit={this._submitForm}>
        <ProjectSection {...projectSectionProps} />

        <Button component={Link} to={`/projects/${id}`}>
          Cancel
        </Button>
        <Button onClick={this._submitForm} disabled={this.state.submitting}>
          Submit
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
      await this.props.onEdit(this.state.formData);
      this.props.history.push(`/projects/${this.props.project.id}`);
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

export default withRouter(ProjectEdit);
