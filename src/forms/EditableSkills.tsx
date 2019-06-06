import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { ItemComponent, EditableListProps } from './EditableList';
import { useQuery, useMutation } from 'react-apollo-hooks';
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
  const { data, error, loading } = useQuery<EditableSkillsListQuery>(
    EditableSkillsListDocument,
    {
      skip: !props.editing
    }
  );
  if (error) return <div>Error! {error.message}</div>;

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
