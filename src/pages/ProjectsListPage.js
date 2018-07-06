import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { format, subMonths } from 'date-fns';
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

/* eslint-disable graphql/template-strings */
const allProjectsQuery = gql`
  query projects($date: String!) {
    projects(date: $date)
      @rest(
        type: "Projects"
        path: "search/repositories?q=org%3Acodefordenver+pushed%3A>:date"
        params: { date: $date }
        endpoint: "github"
      ) {
      items
    }
  }
`;
/* eslint-enable graphql/template-strings */

const ProjectsListPage = graphql(allProjectsQuery, {
  options: () => ({
    variables: { date: format(subMonths(new Date(), 3), 'YYYY-MM-DD') }
  }),
  props: ({ data: { projects, loading } }) => ({
    projects: (projects && projects.items) || [],
    loading
  })
})(ProjectsList);

export default ProjectsListPage;
