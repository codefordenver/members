import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { EditableListProps, ItemComponent } from './EditableList';
import { useCustomQuery } from '../utils/hooks';
import {
  EditableUsersListDocument,
  EditableUsersListQuery
} from '../generated-models';
import './EditableProject.css';

const UserChip: ItemComponent = ({ item, onDelete, editing }) => {
  const chip = (
    <Chip
      clickable={!editing}
      className="EditableProject-chip"
      label={item.name}
      onDelete={onDelete}
    />
  );
  if (editing) {
    return chip;
  }
  return (
    <Link style={{ textDecoration: 'none' }} to={`/volunteers/${item.id}`}>
      {chip}
    </Link>
  );
};

const EditableUsers: React.FC<EditableListProps> = props => {
  const { data, loading } = useCustomQuery<EditableUsersListQuery>(
    EditableUsersListDocument,
    {
      skip: !props.editing
    }
  );

  const users = (data && data.allUsers) || [];

  return (
    <EditableList
      {...props}
      ItemComponent={UserChip}
      allOptions={users}
      allOptionsLoading={loading}
    />
  );
};

export default EditableUsers;
