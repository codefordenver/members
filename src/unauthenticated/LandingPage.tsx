import React from 'react';
import membersPic from '../images/members-pic.jpg';
import { Typography, Theme, createStyles, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: '36px',
      textAlign: 'center',
      margin: theme.spacing(4),
      fontWeight: 'bold'
    },
    body: {
      textAlign: 'center',
      margin: theme.spacing(2)
    }
  })
);

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" className={classes.heading}>
        Welcome to the Code for Denver Members Site
      </Typography>
      <img
        style={{ maxWidth: '100%' }}
        src={membersPic}
        alt="Some of the members of Code for Denver"
      />
      <Typography className={classes.body} variant="body1">
        Please log in or sign up
      </Typography>
    </Box>
  );
};

export default LandingPage;
