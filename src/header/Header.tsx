import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  createStyles,
  Theme,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../images/logo.png';
import userIsAdmin from '../utils/userIsAdmin';
import MenuList from './Menu';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import { User } from '../sharedTypes';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import { useUserCommon } from '../utils/commonGraphql';
import HeaderLink from './HeaderLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerLogo: {
      height: '46px'
    },
    authButton: {
      color: 'white',
      fontSize: '18px',
      letterSpacing: '0.05em',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      fontWeight: 'bold'
    },
    appBar: {
      padding: theme.spacing(1)
    }
  })
);

const AuthButtons = ({ isLoggingIn = false }) => {
  if (isLoggingIn) return <LoadingIndicator />;

  const classes = useStyles();

  return (
    <Grid>
      <Button
        className={classes.authButton}
        color="secondary"
        onClick={AuthService.login}
      >
        Log In
      </Button>
      <Button
        className={classes.authButton}
        color="secondary"
        onClick={AuthService.signUp}
      >
        Sign Up
      </Button>
    </Grid>
  );
};

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

const Header: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Button>
          <Link to="/">
            <img
              className={classes.headerLogo}
              src={logo}
              alt="code for denver logo"
            />
          </Link>
        </Button>

        <Grid container justify="space-between" alignItems="center">
          <Suspense fallback={<LoadingIndicator />}>
            {authContext.isAuthenticated() ? (
              <LoggedInHeaderContent userId={authContext.authData.userId} />
            ) : (
              <AuthButtons isLoggingIn={authContext.isLoggingIn} />
            )}
          </Suspense>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
