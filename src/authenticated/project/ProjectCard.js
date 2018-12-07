import React from 'react';
import gql from 'graphql-tag';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditableSkills from '../../forms/EditableSkills';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, name, skills, status, repoName, headerImage }) => {
  return (
    <Card className="ProjectCard">
      {headerImage && (
        <Link to={`/projects/${id}`}>
          <CardMedia
            className="ProjectCard-media"
            image={headerImage}
            title={name}
          />
        </Link>
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component={Link}
          to={`/projects/${id}`}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={16} alignItems="center">
          <EditableSkills value={skills} name="skills" />
          <a href={`https://github.com/codefordenver/${repoName}`}>GitHub</a>
          &nbsp;
          <a href={`https://waffle.io/codefordenver/${repoName}`}>Waffle</a>
          <Grid item>{status && <span> Status: {status}</span>}</Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProjectCard.fragments = {
  ProjectCardFields: gql`
    fragment ProjectCardFields on Project {
      id
      name
      headerImage
      repoName
      status
      skills {
        id
        name
      }
    }
  `
};

export default ProjectCard;
