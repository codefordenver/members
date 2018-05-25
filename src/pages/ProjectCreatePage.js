import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';
import withCreatePage from '../utils/withCreatePage';

const createProjectQuery = gql`
  mutation createProject(
    $name: String!
    $description: String
    $cfapiProjectId: String!
  ) {
    createProject(
      name: $name
      description: $description
      cfapiProjectId: $cfapiProjectId
    ) {
      id
      name
      description
      cfapiProjectId
    }
  }
`;

const ProjectCreatePage = compose(
  graphql(createProjectQuery, {
    props: ({ mutate }) => ({
      onCreate: newProject => mutate({ variables: newProject })
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
