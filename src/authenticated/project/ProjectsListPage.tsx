import React from 'react';
import Grid from '@material-ui/core/Grid';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import ProjectCard from './ProjectCard';
import {
  ProjectCardsHOC,
  ProjectCardsAllProjects
} from '../../generated-models';

interface ProjectsListProps {
  projects: ProjectCardsAllProjects[];
  loading: boolean;
}

const ProjectsList: React.SFC<ProjectsListProps> = ({ projects, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
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

ProjectsList.defaultProps = {
  projects: []
};

const ProjectsListPage = ProjectCardsHOC({
  props: ({ data: { allProjects = [], loading = true } = {} }) => ({
    projects: allProjects,
    loading
  })
})(ProjectsList);

export default ProjectsListPage;
