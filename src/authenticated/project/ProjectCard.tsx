import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import EditableSkills from '../../forms/EditableSkills';
import EditableLink from '../../forms/EditableLink';
import { ProjectCardFieldsFragment } from '../../generated-models';
import './ProjectCard.css';
import { getRepoPath } from '../../utils';

const ProjectCard: React.SFC<ProjectCardFieldsFragment> = ({
  id,
  name,
  skills,
  status,
  repoName,
  boardUrl,
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
          <EditableLink
            value={repoName}
            name="repoName"
            label="Github Repository Name"
            linkName="Github"
            linkTarget={`https://github.com/${getRepoPath(repoName || '')}`}
          />
          <EditableLink
            value={boardUrl}
            name="boardUrl"
            label="Project Board URL"
            linkName="Project Board"
            linkTarget={boardUrl || ''}
          />
          <Grid item>{status && <span> Status: {status}</span>}</Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
