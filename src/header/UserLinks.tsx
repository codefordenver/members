import React from 'react';
import { useUserCommon } from '../utils/commonGraphql';
import HeaderLink from './HeaderLink';
import userIsAdmin from '../utils/userIsAdmin';
import {
  Typography,
  createStyles,
  Theme,
  Box,
  Button,
  withStyles
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fontWeight } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userLinks: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    button: {
      color: '#A6383E'
    }
  })
);

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      textDecoration: 'underline'
    },
    fontWeight: 'bold',
    fontSize: '18px',
    padding: theme.spacing(1, 2),
    borderRadius: 5,
    marginLeft: 'auto'
  }
}))(Button);

const UserLinks: React.FC<{ userId: string }> = ({ userId }) => {
  const classes = useStyles();
  const { data } = useUserCommon(userId);
  if (!data || !data.user) return null;
  const { user } = data;

  return (
    <Box display="flex" alignItems="center" className={classes.userLinks}>
      <HeaderLink to="/me">PROFILE</HeaderLink>
      <HeaderLink to="/volunteers">USERS</HeaderLink>
      <HeaderLink to="/projects">PROJECTS</HeaderLink>
      {userIsAdmin(user || undefined) && (
        <HeaderLink to="/admin">Admin Resources</HeaderLink>
      )}
      <ColorButton>LOG OUT</ColorButton>
    </Box>
  );
};

export default UserLinks;
