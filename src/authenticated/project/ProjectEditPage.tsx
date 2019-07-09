import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import ProjectForm from './ProjectForm';
import { useMutation } from 'react-apollo-hooks';
import {
  GetProjectDocument,
  GetProjectQuery,
  ProjectSectionFieldsFragment,
  UpdateProjectDocument,
  UpdateProjectMutation
} from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

type ProjectEditPageProps = RouteComponentProps<{ id: string }>;

function formatProjectForMutation(
  updatedProject: ProjectSectionFieldsFragment
) {
  return {
    ...updatedProject,
    skillsIds:
      updatedProject.skills && updatedProject.skills.map(skill => skill.id),
    championsIds:
      updatedProject.champions &&
      updatedProject.champions.map(champion => champion.id)
  };
}

function getBaseUrl(history: History) {
  return history.location.pathname.split('/edit')[0];
}

const ProjectEditPage: React.FC<ProjectEditPageProps> = ({
  history,
  match
}) => {
  const updateProjectMutation = useMutation<UpdateProjectMutation>(
    UpdateProjectDocument,
    {
      refetchQueries: ['editableUsersList']
    }
  );
  const { data } = useCustomQuery<GetProjectQuery>(GetProjectDocument, {
    variables: { id: match.params.id }
  });
  if (!data || !data.Project) return null;

  return (
    <ProjectForm
      initialValues={data.Project}
      editing
      onSubmit={async (updatedProject, actions) => {
        try {
          await updateProjectMutation({
            variables: formatProjectForMutation(updatedProject)
          });
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
