import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';

const projectQuery = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      name
      description
    }
  }
`;

const ProjectPage = graphql(projectQuery, {
  options: props => ({ variables: { id: props.match.params.id } }),
  props: ({ data: { Project } }) => ({ project: Project })
})(ProjectSection);

export default ProjectPage;
