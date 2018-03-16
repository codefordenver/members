import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import logo from '../images/cfd-circle-icon-white.png';
import userIsAdmin from '../utils/userIsAdmin';
import withLoggedInUser from '../utils/withLoggedInUser';
import './Header.css';

const Header = ({ isAuthenticated, user, refreshApp, newUserId }) => {
  // newUserId passed to withLoggedInUser
  console.log(newUserId);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/">
          <img className="Header-logo" src={logo} alt="code for denver logo" />
        </Link>
        <Grid container justify="space-between" alignItems="center">
          {isAuthenticated && (
            <Grid item>
              <Link className="Header-link" to="/volunteers">
                All Users
              </Link>
              <Link className="Header-link" to="/projects">
                All Projects
              </Link>
              {userIsAdmin(user) && (
                <Link className="Header-link" to="/admin">
                  Admin Resources
                </Link>
              )}
            </Grid>
          )}
          <Grid item>
            <Login
              user={user}
              isAuthenticated={isAuthenticated}
              refreshApp={refreshApp}
              newUserId={newUserId}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withLoggedInUser(Header);
