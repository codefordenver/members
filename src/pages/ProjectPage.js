import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';

/* eslint-disable graphql/template-strings */
const projectQuery = gql`
  query Project($repoName: String!) {
    Project(repoName: $repoName)
      @rest(
        type: "githubRepo"
        path: "repos/codefordenver/:repoName"
        params: { repoName: $repoName }
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
    options: props => ({ variables: { repoName: props.match.params.id } }),
    props: ({ data: { Project, loading } }) => ({ Project, loading })
  })
)(ProjectSection);

export default ProjectPage;
