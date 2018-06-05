import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../sections/LoadingIndicator';

const ProjectsList = ({ projects, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return (
    <ul>
      {projects
        .filter(project => project.status === 'Ideation')
        .map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              {project.description || project.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

ProjectsList.defaultProps = {
  projects: []
};

/* eslint-disable graphql/template-strings */
const allProjectsQuery = gql`
  query projects {
    projects
      @rest(
        type: "Projects"
        path: "organizations/Code-for-Denver/projects"
        endpoint: "cfa"
      ) {
      objects
    }
  }
`;
/* eslint-enable graphql/template-strings */

const ProjectsListPage = graphql(allProjectsQuery, {
  options: () => ({}),
  props: ({ data: { projects, loading } }) => ({
    projects: projects ? projects.objects : projects,
    loading
  })
})(ProjectsList);

export default ProjectsListPage;
