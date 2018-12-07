import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList from './EditableList';
import './EditableProject.css';

const allUsersQuery = gql`
  query allUsers {
    allUsers {
      id
      name
    }
  }
`;

const UserChip = ({ item, onDelete, editing }) => {
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

export default compose(
  graphql(allUsersQuery, {
    refetchQueries: ['allUsers'],
    skip: props => !props.editing,
    props: ({ data: { allUsers, loading } }) => ({
      allOptions: allUsers,
      allOptionsLoading: loading,
      ItemComponent: UserChip
    })
  })
)(EditableList);
