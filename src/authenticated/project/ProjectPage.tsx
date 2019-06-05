import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { useQuery } from 'react-apollo-hooks';
import { GetProjectDocument, GetProjectQuery } from '../../generated-models';

type ProjectPageProps = RouteComponentProps<{ id: string }>;

const ProjectPage: React.FC<ProjectPageProps> = ({ match }) => {
  const { data, error, loading } = useQuery<GetProjectQuery>(
    GetProjectDocument,
    {
      variables: { id: match.params.id }
    }
  );
  if (error) return <div>Error! {error.message}</div>;
  if (loading || !data || !data.Project) return <LoadingIndicator />;

  return <ProjectForm initialValues={data.Project} />;
};

export default ProjectPage;
