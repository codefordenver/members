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
      cfapiProjectId
    }
  }
`;

const updateProjectQuery = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String
    $cfapiProjectId: String
  ) {
    updateProject(
      id: $id
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

const ProjectEditPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project } }) => ({ project: Project })
  }),
  graphql(updateProjectQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedProject => mutate({ variables: updatedProject })
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectEditPage;
