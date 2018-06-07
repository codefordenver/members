import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';

/* eslint-disable graphql/template-strings */
const projectQuery = gql`
  query Project($id: String!) {
    Project(id: $id)
      @rest(
        type: "Project"
        path: "projects/:id"
        params: { id: $id }
        endpoint: "cfa"
      ) {
      api_url
      categories
      code_url
      commit_status
      description
      github_details
      id
      issues
      languages
      last_updated
      link_url
      name
      organization
      organization_name
      status
      tags
      type
    }
  }
`;

const ProjectPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project, loading } }) => ({ Project, loading })
  })
)(ProjectSection);

export default ProjectPage;
