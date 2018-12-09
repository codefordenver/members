import React from 'react';
import { compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { withItemComponent, ItemComponent } from './EditableList';
import { EditableProjectsListHOC } from '../generated-models';
import './EditableProject.css';

const ProjectChip: ItemComponent = ({ item, onDelete, editing }) => {
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

interface EditableProjectsProps {
  editing: boolean;
}

export default compose(
  EditableProjectsListHOC<EditableProjectsProps>({
    skip: props => !props.editing,
    props: ({ data: { allProjects = [], loading = true } = {} }) => ({
      allOptions: allProjects,
      allOptionsLoading: loading
    })
  }),
  withItemComponent(ProjectChip)
)(EditableList);
