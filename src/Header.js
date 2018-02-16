import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const Header = ({ user, isAuthenticated }) => (
  <AppBar position="fixed">
    <Toolbar>
      <a href="/">
        <img
          className="Header-logo"
          src="images/cfd-circle-white.png"
          alt="code for denver logo"
        />
      </a>
      <Login user={user} isAuthenticated={isAuthenticated} />

      {isAuthenticated && (
        <Link className="Header-link" to="/volunteers">
          All Users
        </Link>
      )}
    </Toolbar>
  </AppBar>
);

export default Header;
