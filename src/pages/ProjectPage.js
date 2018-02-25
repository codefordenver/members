import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectView from '../sections/ProjectView';

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

const ProjectPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project } }) => ({ project: Project })
  }),
  graphql(updateProjectQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedProject => mutate({ variables: updatedProject })
    })
  })
)(ProjectView);

export default ProjectPage;
