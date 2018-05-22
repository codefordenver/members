import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoadingIndicator from '../sections/LoadingIndicator';
import CardComponent from '../sections/CardProjectList';
import Grid from 'material-ui/Grid';

const ProjectsList = ({ projects, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container>
          {projects.map(project => (
            <Grid item xs={12} sm={6} md={4}>
              <CardComponent key={project.id} project={project} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

ProjectsList.defaultProps = {
  projects: []
};

const allProjectsQuery = gql`
  query projects {
    allProjects(orderBy: name_ASC) {
      id
      name
    }
  }
`;

const ProjectsListPage = graphql(allProjectsQuery, {
  options: () => ({}),
  props: ({ data: { allProjects, loading } }) => ({
    projects: allProjects,
    loading
  })
})(ProjectsList);

export default ProjectsListPage;
