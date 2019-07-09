import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import { GetProjectDocument, GetProjectQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

type ProjectPageProps = RouteComponentProps<{ id: string }>;

const ProjectPage: React.FC<ProjectPageProps> = ({ match }) => {
  const { data } = useCustomQuery<GetProjectQuery>(GetProjectDocument, {
    variables: { id: match.params.id }
  });
  if (!data || !data.Project) return null;

  return <ProjectForm initialValues={data.Project} />;
};

export default ProjectPage;
