import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import EditableChips from './EditableChips';

const allSkillsQuery = gql`
  query allSkills {
    allSkills {
      id
      name
    }
  }
`;

const createSkillQuery = gql`
  mutation createSkill($name: String!) {
    createSkill(name: $name) {
      id
      name
    }
  }
`;

export default compose(
  graphql(createSkillQuery, {
    refetchQueries: ['allSkills'],
    props: ({ mutate }) => ({
      createChip: async newSkill => {
        const mutateData = await mutate({ variables: newSkill });
        return mutateData.data.createSkill;
      }
    })
  }),
  graphql(allSkillsQuery, {
    skip: props => !props.editing,
    props: ({ data: { allSkills, loading } }) => ({
      allOptions: allSkills,
      allOptionsLoading: loading
    })
  })
)(EditableChips);
