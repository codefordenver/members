import { compose } from 'react-apollo';
import ProjectSection from './ProjectSection';
import withEditPage from '../../utils/withEditPage';
import {
  GetProjectHOC,
  UpdateProjectHOC,
  ProjectSectionFieldsFragment
} from '../../generated-models';

type ProjectEditPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const ProjectEditPage = compose(
  GetProjectHOC<ProjectEditPageProps>({
    options: props => ({ variables: { id: props.match.params.id } }),
    props: ({ data: { Project = {} } = {} }) => ({ project: Project })
  }),
  UpdateProjectHOC({
    props: ({ mutate }) => ({
      onEdit: (updatedProject: ProjectSectionFieldsFragment) =>
        mutate &&
        mutate({
          variables: {
            ...updatedProject,
            skillsIds:
              updatedProject.skills &&
              updatedProject.skills.map(skill => skill.id),
            championsIds:
              updatedProject.champions &&
              updatedProject.champions.map(champion => champion.id)
          }
        })
    }),
    options: {
      refetchQueries: ['editableUsersList']
    }
  }),
  withEditPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectEditPage;
