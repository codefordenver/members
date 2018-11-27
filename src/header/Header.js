import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from '../images/cfd-circle-icon-white.png';
import userIsAdmin from '../utils/userIsAdmin';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import './Header.css';

const Header = () => {
  return (
    <AuthenticationContext.Consumer>
      {context => (
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <img
                className="Header-logo"
                src={logo}
                alt="code for denver logo"
              />
            </Link>
            <Grid container justify="space-between" alignItems="center">
              {context.isAuthenticated() ? (
                <Grid item>
                  <Link className="Header-link" to="/volunteers">
                    All Users
                  </Link>
                  <Link className="Header-link" to="/projects">
                    All Projects
                  </Link>
                  {userIsAdmin(context.authData.role) && (
                    <Link className="Header-link" to="/admin">
                      Admin Resources
                    </Link>
                  )}
                </Grid>
              ) : (
                <Grid item>
                  <Button color="secondary" onClick={() => AuthService.login()}>
                    Login
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => AuthService.signUp()}
                  >
                    Signup
                  </Button>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default Header;
