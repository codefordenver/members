import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import { useProjectCommon } from '../../utils/commonGraphql';

type ProjectPageProps = RouteComponentProps<{ id: string }>;

const ProjectPage: React.FC<ProjectPageProps> = ({ match }) => {
  const { data } = useProjectCommon(match.params.id);
  if (!data || !data.Project) return null;

  return <ProjectForm initialValues={data.Project} />;
};

export default ProjectPage;
