import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withViewPage from '../utils/withViewPage';
import ProjectSection from '../sections/ProjectSection';

const projectQuery = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      id
      name
      description
      githubURL
    }
  }
`;

const updateProjectQuery = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String
    $githubURL: String
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      githubURL: $githubURL
    ) {
      id
      name
      description
      githubURL
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
  }),
  withViewPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectPage;
