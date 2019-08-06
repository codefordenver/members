import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import ProjectForm from './ProjectForm';
import { useCreateProjectCommon } from '../../utils/commonGraphql';
import { ProjectStatus } from '../../generated-models';

function getBaseUrl(history: History) {
  return history.location.pathname.split('/create')[0];
}

const ProjectCreatePage: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const createProjectMutation = useCreateProjectCommon();

  return (
    <ProjectForm
      creating
      initialValues={{
        id: '',
        name: '',
        headerImage: '',
        description: '',
        repoName: '',
        boardUrl: '',
        skills: [],
        champions: [],
        status: ProjectStatus.Idea
      }}
      onSubmit={async (newProject, actions) => {
        try {
          await createProjectMutation(newProject);
          history.push(getBaseUrl(history));
        } catch (err) {
          console.error('submitting error', err);
          actions.setSubmitting(false);
          alert(err);
        }
      }}
    />
  );
};

export default withRouter(ProjectCreatePage);
