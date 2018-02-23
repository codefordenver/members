import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

const ProjectsList = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </li>
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
    }
  }
`;

const ProjectsListPage = graphql(allProjectsQuery, {
  options: () => ({}),
  props: ({ data: { allProjects } }) => ({ projects: allProjects })
})(ProjectsList);

export default ProjectsListPage;
