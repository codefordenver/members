import React from 'react';
import { compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { ItemComponent } from './EditableList';
import {
  EditableSkillsListHOC,
  CreateSkillHOC,
  CreateSkillVariables
} from '../generated-models';

const SkillChip: ItemComponent = ({ item, onDelete, editing }) => {
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

interface EditableSkillsProps {
  editing: boolean;
}

export default compose(
  CreateSkillHOC({
    options: {
      refetchQueries: ['editableSkillsList']
    },
    props: ({ mutate }) => ({
      createChip: async (newSkill: CreateSkillVariables) => {
        if (!mutate) {
          throw new Error('mutate not defined');
        }
        const mutateData = await mutate({ variables: newSkill });
        return mutateData && mutateData.data && mutateData.data.createSkill;
      },
      ItemComponent: SkillChip
    })
  }),
  EditableSkillsListHOC<EditableSkillsProps>({
    skip: props => !props.editing,
    props: ({ data: { allSkills = [], loading = true } = {} }) => ({
      allOptions: allSkills,
      allOptionsLoading: loading
    })
  })
)(EditableList);
