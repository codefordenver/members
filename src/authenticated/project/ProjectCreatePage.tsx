import { compose } from 'react-apollo';
import ProjectSection from './ProjectSection';
import withCreatePage from '../../utils/withCreatePage';
import {
  CreateProjectHOC,
  ProjectSectionFieldsFragment
} from '../../generated-models';

const ProjectCreatePage = compose(
  CreateProjectHOC({
    props: ({ mutate }) => ({
      onCreate: (newProject: ProjectSectionFieldsFragment) => {
        if (!newProject.repoName) {
          throw new Error('Projects require a specified repo name');
        }
        const { skills, champions, ...newProjectSansUnusedFields } = newProject;

        return (
          mutate &&
          mutate({
            variables: {
              ...newProjectSansUnusedFields,
              skillsIds: newProject.skills
                ? newProject.skills.map(skill => skill.id)
                : [],
              championsIds: newProject.champions
                ? newProject.champions.map(champion => champion.id)
                : [],
              repoName: newProject.repoName // Typescript was complaining without this
            }
          })
        );
      }
    }),
    options: {
      refetchQueries: ['projects']
    }
  }),
  withCreatePage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectCreatePage;
