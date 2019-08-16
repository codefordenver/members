import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  createStyles,
  Theme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../images/logo.png';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import LoggedInHeaderContent from './LoggedInHeaderContent';

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
