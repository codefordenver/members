import React from 'react';
import membersPic from '../images/members-pic.jpg';
import './LandingPage.css';

const LandingPage = () => (
  <div>
    <h1>Welcome to the Code for Denver Members Site</h1>
    <img
      className="LandingPage-members-pic"
      src={membersPic}
      alt="Some of the members of Code for Denver"
    />
    <p>Please sign up or log in</p>
  </div>
);

export default LandingPage;
