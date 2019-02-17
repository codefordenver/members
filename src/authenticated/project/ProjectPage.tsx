import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { GetProjectComponent } from '../../generated-models';

type ProjectPageProps = RouteComponentProps<{ id: string }>;

const ProjectPage: React.SFC<ProjectPageProps> = ({ match }) => {
  return (
    <GetProjectComponent variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading || !data || !data.Project) return <LoadingIndicator />;

        return <ProjectForm initialValues={data.Project} />;
      }}
    </GetProjectComponent>
  );
};

export default ProjectPage;
