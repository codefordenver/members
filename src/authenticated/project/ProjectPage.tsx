import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import ProjectForm, { PROJECT_FORM_FRAGMENT } from './ProjectForm';
import { GetProjectQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      ...ProjectSectionFields
    }
  }
  ${PROJECT_FORM_FRAGMENT}
`;

type ProjectPageProps = RouteComponentProps<{ id: string }>;

const ProjectPage: React.FC<ProjectPageProps> = ({ match }) => {
  const { data } = useCustomQuery<GetProjectQuery>(GET_PROJECT, {
    variables: { id: match.params.id }
  });
  if (!data || !data.Project) return null;

  return <ProjectForm initialValues={data.Project} />;
};

export default ProjectPage;
