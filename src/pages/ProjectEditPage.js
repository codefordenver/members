import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';
import withEditPage from '../utils/withEditPage';

const projectQuery = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      id
      name
      description
    }
  }
`;

const updateProjectQuery = gql`
  mutation updateProject($id: ID!, $name: String!, $description: String) {
    updateProject(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const ProjectEditPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project } }) => ({ formData: Project })
  }),
  graphql(updateProjectQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedProject => mutate({ variables: updatedProject })
    })
  }),
  withEditPage()
)(ProjectSection);

export default ProjectEditPage;
