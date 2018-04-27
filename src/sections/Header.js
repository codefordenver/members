import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import Login from './Login';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import logo from '../images/cfd-circle-icon-white.png';
import userIsAdmin from '../utils/userIsAdmin';
import withLoggedInUser from '../utils/withLoggedInUser';
import withAuthSession from '../utils/withAuthSession';
import './Header.css';

const Header = ({ isAuthenticated, user }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container justify="center" alignItems="center">
        <Grid item sx={2} sm={2}>
          <Link to="/">
            <img
              className="Header-logo"
              src={logo}
              alt="code for denver logo"
            />
          </Link>
        </Grid>
        <Grid item xs={10} sm={6}>
          {isAuthenticated && (
            <Grid container justify="flex-start" alignItems="center">
              <Grid item sx={4}>
                <Link className="Header-link" to="/volunteers">
                  <Button color="secondary">ALL USERS</Button>
                </Link>
              </Grid>
              <Grid item sx={4}>
                <Link className="Header-link" to="/projects">
                  <Button color="secondary">ALL PROJECTS</Button>
                </Link>
              </Grid>
              {userIsAdmin(user) && (
                <Grid item sx={4}>
                  <Link className="Header-link" to="/admin">
                    <Button color="secondary">ADMIN RESOURCES</Button>
                  </Link>
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid
            className="Header-login"
            container
            justify="center"
            alignItems="center"
          >
            <Login />
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default compose(withLoggedInUser, withAuthSession)(Header);
