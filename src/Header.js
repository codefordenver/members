import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';

const Header = ({ user, isAuthenticated }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <a href="/">
            <img
              className="Header-logo"
              src="images/cfd-circle-white.png"
              alt="code for denver logo"
            />
          </a>
        </Grid>

        {isAuthenticated && (
          <Grid item>
            <Link className="Header-link" to="/volunteers">
              All Users
            </Link>
          </Grid>
        )}
        <Grid item>
          <Login isAuthenticated={isAuthenticated} user={user} />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
