import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { withItemComponent } from './EditableList';
import './EditableProject.css';

const allProjectsQuery = gql`
  query allProjects {
    allProjects {
      id
      name
    }
  }
`;

const ProjectChip = ({ item, onDelete, editing }) => {
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
    <Link style={{ textDecoration: 'none' }} to={`/projects/${item.id}`}>
      {chip}
    </Link>
  );
};

export default compose(
  graphql(allProjectsQuery, {
    skip: props => !props.editing,
    props: ({ data: { allProjects, loading } }) => ({
      allOptions: allProjects,
      allOptionsLoading: loading
    })
  }),
  withItemComponent(ProjectChip)
)(EditableList);
