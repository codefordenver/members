import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withViewPage from '../utils/withViewPage';
import ProjectSection from '../sections/ProjectSection';

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
  mutation updateProject($id: ID!, $name: String!, $description: String) {
    updateProject(id: $id, name: $name, description: $description) {
      name
      description
    }
  }
`;

const ProjectPage = compose(
  graphql(projectQuery, {
    options: props => ({
      variables: { repoName: props.match.params.repoName }
    }),
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
