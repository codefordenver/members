import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import logo from '../images/cfd-circle-icon-white.png';
import './Header.css';

const Header = ({ user, isAuthenticated }) => (
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
