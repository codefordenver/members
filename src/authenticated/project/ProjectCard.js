import React from 'react';
import gql from 'graphql-tag';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditableSkills from '../../forms/EditableSkills';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, name, skills, repoName, headerImage }) => {
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
          variant="headline"
          component={Link}
          to={`/projects/${id}`}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <EditableSkills value={skills} name="skills" />
        <div>
          <Link to={`https://github.com/codefordenver/${repoName}`}>
            GitHub
          </Link>
        </div>
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
      skills {
        id
        name
      }
    }
  `
};

export default ProjectCard;
