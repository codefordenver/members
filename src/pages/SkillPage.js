import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SkillDetails from '../sections/SkillDetails';

const skillQuery = gql`
  query getSkill($id: ID) {
    skill: Skill(id: $id) {
      id
      name
      projectsWithSkill {
        id
        name
      }
      usersWithSkill {
        id
        name
        picture
      }
    }
  }
`;

const SkillPage = graphql(skillQuery, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  },
  props: ({ data: { skill, loading, refetch } }) => {
    refetch(); // Refresh on page render so the data isn't stale
    return { skill, loading };
  }
})(SkillDetails);

export default SkillPage;
