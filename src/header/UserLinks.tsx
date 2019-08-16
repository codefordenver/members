import React from 'react';
import { useUserCommon } from '../utils/commonGraphql';
import HeaderLink from './HeaderLink';
import userIsAdmin from '../utils/userIsAdmin';
import { Typography, createStyles, Theme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userLinks: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  })
);

const UserLinks: React.FC<{ userId: string }> = ({ userId }) => {
  const styles = useStyles();
  const { data } = useUserCommon(userId);
  if (!data || !data.user) return null;
  const { user } = data;

  return (
    <Box className={styles.userLinks}>
      <Typography>
        <HeaderLink to="/me">PROFILE</HeaderLink>
        <HeaderLink to="/volunteers">USERS</HeaderLink>
        <HeaderLink to="/projects">PROJECTS</HeaderLink>
        {userIsAdmin(user || undefined) && (
          <HeaderLink to="/admin">Admin Resources</HeaderLink>
        )}
      </Typography>
    </Box>
  );
};

export default UserLinks;
