import React from 'react';
import { useUserCommon } from '../utils/commonGraphql';
import HeaderLink from './HeaderLink';
import userIsAdmin from '../utils/userIsAdmin';
import MenuList from './Menu';
import { User } from '../sharedTypes';
import AuthService from '../utils/authentication/authService';
import { Grid, Typography } from '@material-ui/core';

const UserLinks = ({ user }: { user: User | null }) => (
  <Grid item>
    <Typography>
      <HeaderLink to="/volunteers">USERS</HeaderLink>
      <HeaderLink to="/projects">PROJECTS</HeaderLink>
      {userIsAdmin(user || undefined) && (
        <HeaderLink to="/admin">Admin Resources</HeaderLink>
      )}
    </Typography>
  </Grid>
);

const LoggedInHeaderContent: React.FC<{ userId: string }> = ({ userId }) => {
  const { data } = useUserCommon(userId);
  if (!data || !data.user) return null;

  return (
    <React.Fragment>
      <UserLinks user={data.user} />
      <MenuList
        avatar={data.user.picture || ''}
        username={data.user.name || ''}
        logout={AuthService.logout}
      />
    </React.Fragment>
  );
};

export default LoggedInHeaderContent;
