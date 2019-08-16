import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: 'white',
      fontSize: '18px',
      letterSpacing: '0.05em',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        textShadow: '0 0 8px white'
      }
    }
  })
);

const HeaderLink: React.FC<{ to: string }> = ({ children, to }) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={to}>
      {children}
    </Link>
  );
};

export default HeaderLink;
