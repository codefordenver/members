import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from '../sections/ProjectSection';
import withCreatePage from '../utils/withCreatePage';

const createProjectQuery = gql`
  mutation createProject(
    $name: String!
    $description: String
    $repoName: String!
    $skillsIds: [ID!]
  ) {
    createProject(
      name: $name
      description: $description
      repoName: $repoName
      skillsIds: $skillsIds
    ) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSection.fragments.ProjectSectionFields}
`;

const ProjectCreatePage = compose(
  graphql(createProjectQuery, {
    props: ({ mutate }) => ({
      onCreate: newProject =>
        mutate({
          variables: {
            ...newProject,
            skillsIds: newProject.skills.map(skill => skill.id)
          }
        })
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
