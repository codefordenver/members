import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoadingIndicator from '../sections/LoadingIndicator';
import ProjectSideBar from '../sections/ProjectSidebar';

const ProjectsList = ({ projects, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return <ProjectSideBar projects={projects} />;
};

ProjectsList.defaultProps = {
  projects: []
};

const allProjectsQuery = gql`
  query projects {
    allProjects(orderBy: name_ASC) {
      name
      repoName
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
