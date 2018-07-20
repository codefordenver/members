import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';
import withEditPage from '../utils/withEditPage';

const projectQuery = gql`
  query getProject($repoName: String!) {
    Project(repoName: $repoName) {
      id
      name
      description
      repoName
    }
  }
`;

const updateProjectQuery = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String
    $repoName: String!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      repoName: $repoName
    ) {
      name
      description
      repoName
    }
  }
`;

const ProjectEditPage = compose(
  graphql(projectQuery, {
    options: props => ({
      variables: { repoName: props.match.params.repoName }
    }),
    props: ({ data: { Project } }) => ({ project: Project })
  }),
  graphql(updateProjectQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedProject => {
        if (updatedProject.repoName) {
          return mutate({ variables: updatedProject });
        }
        return Promise.reject('A repository name is required');
      }
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectEditPage;
