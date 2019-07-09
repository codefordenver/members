import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { ItemComponent, EditableListProps } from './EditableList';
import { useMutation } from 'react-apollo-hooks';
import { useCustomQuery } from '../utils/hooks';
import {
  EditableSkillsListQuery,
  EditableSkillsListDocument,
  CreateSkillVariables,
  CreateSkillDocument,
  CreateSkillMutation
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

const EditableSkills: React.FC<EditableListProps> = props => {
  const createSkill = useMutation<CreateSkillMutation>(CreateSkillDocument, {
    refetchQueries: ['editableSkillsList']
  });
  const { data, loading } = useCustomQuery<EditableSkillsListQuery>(
    EditableSkillsListDocument,
    {
      skip: !props.editing,
      suspend: false
    }
  );

  return (
    <EditableList
      {...props}
      ItemComponent={SkillChip}
      allOptions={(data && data.allSkills) || []}
      allOptionsLoading={loading}
      createChip={async (newSkill: CreateSkillVariables) => {
        const response = await createSkill({ variables: newSkill });
        return response.data && response.data.createSkill;
      }}
    />
  );
};

export default EditableSkills;
