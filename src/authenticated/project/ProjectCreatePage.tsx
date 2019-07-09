import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import ProjectForm, { PROJECT_FORM_FRAGMENT } from './ProjectForm';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import {
  ProjectSectionFieldsFragment,
  CreateProjectMutation,
  ProjectStatus
} from '../../generated-models';

const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String!
    $boardUrl: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
    $status: ProjectStatus
  ) {
    createProject(
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      boardUrl: $boardUrl
      skillsIds: $skillsIds
      championsIds: $championsIds
      status: $status
    ) {
      ...ProjectSectionFields
    }
  }
  ${PROJECT_FORM_FRAGMENT}
`;

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
  const createProjectMutation = useMutation<CreateProjectMutation>(
    CREATE_PROJECT,
    {
      // TODO: These didn't exist before, check if they are actually needed
      refetchQueries: ['projectCards', 'projectsDrawer', 'editableUsersList']
    }
  );

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
  );
};

export default withRouter(ProjectCreatePage);
