import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActoins, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const githubQuery = gql`
  query github($owner: String!, $name: String!) {
    getRepoLanguages(owner: $owner, name: $name) {
      repository(owner: $owner, name: $name) {
        languages {
          edges {
            size
            node {
              color
              id
              name
            }
          }
        }
      }
    }
  }
`;

const styles = {
  card: {
    maxWidth: 375
  },
  media: {
    height: 0,
    paddingTop: 56.25
  }
};

const ProjectComponent = props => {
  const { classes } = props;
  const project = props.projectInfo;
  return (
    <div>
      <li key={project.id}>
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
        <div> {project.githubURL} </div>
      </li>
    </div>
  );
};

ProjectComponent.defaultProps = {
  repository: []
};

const ProjectInfo = graphql(githubQuery, {
  options: () => ({ variables: { owner: 'codefordenver', name: 'members' } }),
  props: ({ data: { repository } }) => ({ repository: repository })
})(ProjectComponent);

export default ProjectInfo;
