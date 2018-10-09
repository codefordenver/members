import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList from './EditableList';

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

const SkillChip = ({ item, onDelete, editing }) => {
  const chip = (
    <Chip
      clickable={!editing}
      className="EditableList-chip"
      label={item.name}
      onDelete={onDelete}
    />
  );

  if (editing) {
    return chip;
  }
  return <Link to={`/skills/${item.id}`}>{chip}</Link>;
};

export default compose(
  graphql(createSkillQuery, {
    refetchQueries: ['allSkills'],
    props: ({ mutate }) => ({
      createChip: async newSkill => {
        const mutateData = await mutate({ variables: newSkill });
        return mutateData.data.createSkill;
      },
      ItemComponent: SkillChip
    })
  }),
  graphql(allSkillsQuery, {
    skip: props => !props.editing,
    props: ({ data: { allSkills, loading } }) => ({
      allOptions: allSkills,
      allOptionsLoading: loading
    })
  })
)(EditableList);
