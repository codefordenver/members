import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { EditableListProps, ItemComponent } from './EditableList';
import {
  EditableUsersListDocument,
  EditableUsersListQuery
} from '../generated-models';
import './EditableProject.css';
import { useQuery } from 'react-apollo-hooks';

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
  const { data, error, loading } = useQuery<EditableUsersListQuery>(
    EditableUsersListDocument,
    {
      skip: !props.editing
    }
  );
  if (error) return <div>Error! {error.message}</div>;

  const users = ((data && data.allUsers) || []).map(user => ({
    ...user,
    name: user.name || '' // TODO: It seems like we should probably just require names on users
  }));

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
