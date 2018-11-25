import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import EditableList from './EditableList';
import './EditableProject.css';

const allProjectsQuery = gql`
  query allProjects {
    allProjects {
      id
      name
    }
  }
`;

const createProjectQuery = gql`
  mutation createProject($name: String!) {
    createProject(name: $name) {
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
  graphql(createProjectQuery, {
    refetchQueries: ['allProjects'],
    props: ({ mutate }) => ({
      createChip: async newProject => {
        const mutateData = await mutate({ variables: newProject });
        return mutateData.data.createProject;
      },
      ItemComponent: ProjectChip
    })
  }),
  graphql(allProjectsQuery, {
    skip: props => !props.editing,
    props: ({ data: { allProjects, loading } }) => ({
      allOptions: allProjects,
      allOptionsLoading: loading
    })
  })
)(EditableList);
