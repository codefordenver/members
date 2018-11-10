import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import ProjectCard, { ProjectCardFragments } from './ProjectCard';

const ProjectsList = ({ projects, loading }) => {
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

const allProjectsQuery = gql`
  query projects {
    allProjects(orderBy: name_ASC) {
      ...ProjectCardFields
    }
  }
  ${ProjectCardFragments.ProjectCardFields}
`;

const ProjectsListPage = graphql(allProjectsQuery, {
  options: () => ({}),
  props: ({ data: { allProjects, loading } }) => ({
    projects: allProjects,
    loading
  })
})(ProjectsList);

export default ProjectsListPage;
