import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import ProjectSection from './ProjectSection';
import withEditPage from '../../utils/withEditPage';

const projectQuery = gql`
  query getProject($id: ID!) {
    Project(id: $id) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSection.fragments.ProjectSectionFields}
`;

const updateProjectQuery = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
  ) {
    updateProject(
      id: $id
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      skillsIds: $skillsIds
      championsIds: $championsIds
    ) {
      ...ProjectSectionFields
    }
  }

  ${ProjectSection.fragments.ProjectSectionFields}
`;

const ProjectEditPage = compose(
  graphql(projectQuery, {
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project } }) => ({ project: Project })
  }),
  graphql(updateProjectQuery, {
    props: ({ mutate }) => ({
      onEdit: updatedProject =>
        mutate({
          variables: {
            ...updatedProject,
            skillsIds: updatedProject.skills.map(skill => skill.id),
            championsIds: updatedProject.champions.map(champion => champion.id)
          }
        })
    })
  }),
  withEditPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectEditPage;
