import SkillDetails from './SkillDetails';
import { SkillPageHOC } from '../../generated-models';

type SkillPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const SkillPage = SkillPageHOC<SkillPageProps>({
  options: props => {
    return { variables: { id: props.match.params.id } };
  },
  props: ({
    data: { skill = null, loading = true, refetch = () => undefined } = {}
  }) => {
    refetch(); // Refresh on page render so the data isn't stale
    return { skill, loading };
  }
})(SkillDetails);

export default SkillPage;
