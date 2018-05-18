import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoadingIndicator from '../sections/LoadingIndicator';
import ProjectInfo from '../sections/ProjectInfo';

const ProjectsList = ({ projects, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return (
    <ul>
      {projects.map(project => (
        <ProjectInfo key={project.id} projectInfo={project} />
      ))}
    </ul>
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
      githubURL
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
