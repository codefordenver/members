import React from 'react';
import Grid from '@material-ui/core/Grid';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import ProjectCard from './ProjectCard';
import { useQuery } from 'react-apollo-hooks';
import {
  ProjectCardsAllProjects,
  ProjectCardsQuery,
  ProjectCardsDocument
} from '../../generated-models';

interface ProjectsListProps {
  projects: ProjectCardsAllProjects[];
  loading: boolean;
}

const ProjectsListPage: React.FC<ProjectsListProps> = () => {
  const { data, error, loading } = useQuery<ProjectCardsQuery>(
    ProjectCardsDocument
  );
  if (error) return <div>Error! {error.message}</div>;
  if (loading || !data || !data.allProjects) return <LoadingIndicator />;

  const projects = data.allProjects;
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return (
    <Grid container spacing={24}>
      {projects.map(project => (
        <Grid key={project.id} item sm={12} md={6} lg={4}>
          <ProjectCard key={project.id} {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsListPage;
