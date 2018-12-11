import React from 'react';
import { compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { withItemComponent, ItemComponent } from './EditableList';
import { EditableUsersListHOC } from '../generated-models';
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

interface EditableUsersProps {
  editing: boolean;
}

export default compose(
  EditableUsersListHOC<EditableUsersProps>({
    skip: props => !props.editing,
    props: ({ data: { allUsers = [], loading = true } = {} }) => ({
      allOptions: allUsers,
      allOptionsLoading: loading
    })
  }),
  withItemComponent(UserChip)
)(EditableList);
