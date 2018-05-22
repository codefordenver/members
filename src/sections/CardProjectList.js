import React from 'react';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import CardMedia from 'material-ui/Card/CardMedia';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

function SimpleMediaCard(props) {
  return (
    <div>
      <Card>
        {/*Card Media can be used to add a sample image of each project later */}
        <CardMedia image="" title={props.project.name} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.project.name}
          </Typography>
          <Typography component="p">
            {/* Short description of each project*/}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/projects/${props.project.id}`}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SimpleMediaCard;
