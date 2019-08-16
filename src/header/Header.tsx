import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  createStyles,
  Theme,
  Box,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../images/logo.png';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import UserLinks from './UserLinks';
import MenuDrawer from './MenuDrawer';

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
      fontWeight: 'bold',
      '&:last-of-type': {
        marginRight: 0
      }
    }
  })
);

const AuthButtons = ({ isLoggingIn = false }) => {
  if (isLoggingIn) return <LoadingIndicator />;

  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
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
    </Box>
  );
};

const Header: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  const classes = useStyles();
  const authenticated = authContext.isAuthenticated();
  const { authData, isLoggingIn } = authContext;
  const { userId } = authData;

  return (
    <AppBar position="sticky">
      <Toolbar>
        {authenticated && <MenuDrawer userId={userId} />}
        <IconButton>
          <Link to="/">
            <img
              className={classes.headerLogo}
              src={logo}
              alt="code for denver logo"
            />
          </Link>
        </IconButton>

        <Box width="100%" justifyContent="flex-end" alignItems="center">
          <Suspense fallback={<LoadingIndicator />}>
            {authenticated ? (
              <UserLinks userId={userId} />
            ) : (
              <AuthButtons isLoggingIn={isLoggingIn} />
            )}
          </Suspense>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
