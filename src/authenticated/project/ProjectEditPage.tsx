import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import ProjectForm, { PROJECT_FORM_FRAGMENT } from './ProjectForm';
import { useCustomQuery } from '../../utils/hooks';
import {
  ProjectEditPageGetProjectQuery,
  ProjectSectionFieldsFragment,
  ProjectEditPageUpdateProjectMutation
} from '../../generated-models';

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

export const GET_PROJECT = gql`
  query projectEditPageGetProject($id: ID!) {
    Project(id: $id) {
      ...ProjectSectionFields
    }
  }
  ${PROJECT_FORM_FRAGMENT}
`;

export const UPDATE_PROJECT = gql`
  mutation projectEditPageUpdateProject(
    $id: ID!
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String
    $boardUrl: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
    $status: ProjectStatus
  ) {
    updateProject(
      id: $id
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

const ProjectEditPage: React.FC<ProjectEditPageProps> = ({
  history,
  match
}) => {
  const updateProjectMutation = useMutation<
    ProjectEditPageUpdateProjectMutation
  >(UPDATE_PROJECT, {
    refetchQueries: ['editableUsersList']
  });
  const { data } = useCustomQuery<ProjectEditPageGetProjectQuery>(GET_PROJECT, {
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
