import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import ProjectForm from './ProjectForm';
import {
  useProjectCommon,
  useUpdateProjectCommon
} from '../../utils/commonGraphql';

type ProjectEditPageProps = RouteComponentProps<{ id: string }>;

function getBaseUrl(history: History) {
  return history.location.pathname.split('/edit')[0];
}

const ProjectEditPage: React.FC<ProjectEditPageProps> = ({
  history,
  match
}) => {
  const updateProjectMutation = useUpdateProjectCommon();
  const { data } = useProjectCommon(match.params.id);
  if (!data || !data.Project) return null;

  return (
    <ProjectForm
      initialValues={data.Project}
      editing
      onSubmit={async (updatedProject, actions) => {
        try {
          await updateProjectMutation(updatedProject);
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

export default ProjectEditPage;
