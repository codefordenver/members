import React from 'react';
import membersPic from '../images/members-pic.jpg';
import './DeprecationPage.css';

const DeprecationPage: React.FC = () => (
  <div>
    <div className="DeprecationPage-warning">
      <h1 className="DeprecationPage-warning-title">
        NOTE: The Code for Denver Members site has shut down
      </h1>
      <h2>
        To find us, visit the{' '}
        <a href="https://www.meetup.com/codefordenver/">
          Code for Denver meetup page
        </a>
        .
      </h2>
      <p>
        For more info on the background for deprecating this project{' '}
        <a href="https://github.com/codefordenver/members">click here</a>.
      </p>
    </div>
    <h1 className="leftPad">Welcome to the Code for Denver Members Site</h1>
    <img
      className="DeprecationPage-members-pic"
      src={membersPic}
      alt="Some of the members of Code for Denver"
    />
  </div>
);

export default DeprecationPage;
