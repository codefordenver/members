import { compose } from 'react-apollo';
import withViewPage from '../../utils/withViewPage';
import ProjectSection from './ProjectSection';
import { GetProjectHOC } from '../../generated-models';

type ProjectPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const ProjectPage = compose(
  GetProjectHOC<ProjectPageProps>({
    options: (props: ProjectPageProps) => ({
      variables: { id: props.match.params.id }
    }),
    props: ({ data: { Project = {} } = {} }) => ({ project: Project })
  }),
  withViewPage({
    renameProps: {
      formData: 'project'
    }
  })
)(ProjectSection);

export default ProjectPage;
