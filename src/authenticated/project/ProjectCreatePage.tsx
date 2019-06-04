import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import ProjectForm from './ProjectForm';
import {
  CreateProjectComponent,
  ProjectSectionFieldsFragment,
  ProjectStatus
} from '../../generated-models';

function getBaseUrl(history: History) {
  return history.location.pathname.split('/create')[0];
}

function formatNewProjectForMutation(newProject: ProjectSectionFieldsFragment) {
  if (!newProject.repoName) {
    throw new Error('Projects require a specified repo name');
  }
  const { id, skills, champions, ...newProjectSansUnusedFields } = newProject;
  return {
    ...newProjectSansUnusedFields,
    skillsIds: newProject.skills
      ? newProject.skills.map(skill => skill.id)
      : [],
    championsIds: newProject.champions
      ? newProject.champions.map(champion => champion.id)
      : [],
    repoName: newProject.repoName // Typescript was complaining without this
  };
}

const ProjectCreatePage: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  return (
    <CreateProjectComponent>
      {createProjectMutation => (
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
              await createProjectMutation({
                variables: formatNewProjectForMutation(newProject)
              });
              history.push(getBaseUrl(history));
            } catch (err) {
              console.error('submitting error', err);
              actions.setSubmitting(false);
              alert(err);
            }
          }}
        />
      )}
    </CreateProjectComponent>
  );
};

export default withRouter(ProjectCreatePage);
