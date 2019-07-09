import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { ItemComponent, EditableListProps } from './EditableList';
import { useMutation } from 'react-apollo-hooks';
import { useCustomQuery } from '../utils/hooks';
import gql from 'graphql-tag';
import {
  EditableSkillsListQuery,
  CreateSkillVariables,
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

export const EDITABLE_SKILLS = gql`
  query editableSkillsList {
    allSkills {
      id
      name
    }
  }
`;

const CREATE_SKILL = gql`
  mutation createSkill($name: String!) {
    createSkill(name: $name) {
      id
      name
    }
  }
`;

const EditableSkills: React.FC<EditableListProps> = props => {
  const createSkill = useMutation<CreateSkillMutation>(CREATE_SKILL, {
    refetchQueries: ['editableSkillsList']
  });
  const { data, loading } = useCustomQuery<EditableSkillsListQuery>(
    EDITABLE_SKILLS,
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
