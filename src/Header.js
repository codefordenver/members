import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Header.css';

const Header = ({ user }) => (
  <div className="Header">
    <a href="/">
      <img
        className="cfd-logo"
        src="images/cfd-circle-white.png"
        alt="code for denver logo"
      />
    </a>
    <Login user={user} />
    <Link className="Header-link" to="/volunteers">
      All Users
    </Link>
  </div>
);

export default Header;
