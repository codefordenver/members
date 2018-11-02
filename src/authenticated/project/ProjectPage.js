import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import ProjectSection from './ProjectSection';

const projectQuery = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSection.fragments.ProjectSectionFields}
`;

const ProjectPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project } }) => ({ project: Project })
  }),
  withViewPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectPage;
