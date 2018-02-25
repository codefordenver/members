import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import ProjectSection from './ProjectSection';

class ProjectView extends React.PureComponent {
  render() {
    const { project } = this.props;
    if (!project) {
      return <LoadingIndicator />;
    }

    const projectSectionProps = {
      formData: project,
      editing: false,
      onFormDataChange: () => {}
    };
    return (
      <div>
        <ProjectSection {...projectSectionProps} />

        <Button component={Link} to={`/projects/${project.id}/edit`}>
          Edit
        </Button>
      </div>
    );
  }
}

export default ProjectView;
