import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';

/* eslint-disable graphql/template-strings */
const projectQuery = gql`
  query Project($id: String!) {
    Project(repoName: $id)
      @rest(
        type: "Project"
        path: "repos/codefordenver/:repoName"
        params: { id: $repoName }
        endpoint: "github"
      ) {
      id
      name
      description
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
