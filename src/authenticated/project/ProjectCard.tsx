import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import EditableSkills from '../../forms/EditableSkills';
import EditableWaffleAndGithubLinks from '../../forms/EditableWaffleAndGithubLinks';
import { ProjectCardFieldsFragment } from '../../generated-models';
import './ProjectCard.css';

const ProjectCard: React.SFC<ProjectCardFieldsFragment> = ({
  id,
  name,
  skills,
  status,
  repoName,
  headerImage
}) => {
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
          component={({ innerRef, ...props }) => (
            <Link to={`/projects/${id}`} {...props} />
          )}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={16} alignItems="center">
          <EditableSkills value={skills} name="skills" />
          <EditableWaffleAndGithubLinks value={repoName} />
          <Grid item>{status && <span> Status: {status}</span>}</Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
