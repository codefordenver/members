import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectCreate from '../sections/ProjectCreate';

const createProjectQuery = gql`
  mutation createProject($name: String!, $description: String) {
    createProject(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const ProjectCreatePage = compose(
  graphql(createProjectQuery, {
    props: ({ mutate }) => ({
      onCreate: newProject => mutate({ variables: newProject })
    })
  })
)(ProjectCreate);

export default ProjectCreatePage;
