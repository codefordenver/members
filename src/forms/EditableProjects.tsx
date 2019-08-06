import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import gql from 'graphql-tag';
import EditableList, { EditableListProps, ItemComponent } from './EditableList';
import { useCustomQuery } from '../utils/hooks';
import { EditableProjectsListQuery } from '../generated-models';
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

const EDITABLE_PROJECTS = gql`
  query editableProjectsList {
    allProjects {
      id
      name
    }
  }
`;

const EditableProjects: React.FC<EditableListProps> = props => {
  const { data, loading } = useCustomQuery<EditableProjectsListQuery>(
    EDITABLE_PROJECTS,
    {
      skip: !props.editing,
      suspend: false
    }
  );

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
