import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  createStyles,
  Theme,
  Box,
  IconButton,
  Container
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
    },
    toolbar: {
      padding: theme.spacing(2, 0)
    },
    link: {
      fontSize: 0,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
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
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          {authenticated && <MenuDrawer userId={userId} />}
          <Link className={classes.link} to="/">
            <img
              className={classes.headerLogo}
              src={logo}
              alt="code for denver logo"
            />
          </Link>

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
      </Container>
    </AppBar>
  );
};

export default Header;
