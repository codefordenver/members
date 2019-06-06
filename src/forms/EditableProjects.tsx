import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList, { EditableListProps, ItemComponent } from './EditableList';
import {
  EditableProjectsListQuery,
  EditableProjectsListDocument
} from '../generated-models';
import './EditableProject.css';
import { useQuery } from 'react-apollo-hooks';

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

const EditableProjects: React.FC<EditableListProps> = props => {
  const { data, error, loading } = useQuery<EditableProjectsListQuery>(
    EditableProjectsListDocument,
    {
      skip: !props.editing
    }
  );
  if (error) return <div>Error! {error.message}</div>;

  return (
    <EditableList
      {...props}
      ItemComponent={ProjectChip}
      allOptions={(data && data.allProjects) || []}
      allOptionsLoading={loading}
    />
  );
};

export default EditableProjects;
