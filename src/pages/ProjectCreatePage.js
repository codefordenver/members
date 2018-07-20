import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';
import withCreatePage from '../utils/withCreatePage';

const createProjectQuery = gql`
  mutation createProject(
    $name: String!
    $description: String
    $repoName: String!
  ) {
    createProject(name: $name, description: $description, repoName: $repoName) {
      name
      description
      repoName
    }
  }
`;

const ProjectCreatePage = compose(
  graphql(createProjectQuery, {
    props: ({ mutate }) => ({
      onCreate: newProject => {
        if (newProject.repoName) {
          return mutate({ variables: newProject });
        }
        return Promise.reject('A repository name is required');
      }
    }),
    options: {
      refetchQueries: ['allProjects']
    }
  }),
  withCreatePage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectCreatePage;
