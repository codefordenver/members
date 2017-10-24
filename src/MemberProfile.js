import React from "react";
import { Link } from "react-router-dom";

const MemberProfile = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="user-bio">
          <img src="http://placehold.it/150x150" />
          <h2>FirstName LastName</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum."</p>
          <a href="mailto:email@gmail.com">email@gmail.com</a>
          <div><span>GitHub: </span><a href="github.com">github.com</a></div>
          <div><span>Flowdock: </span><a href= "flowdock.com">flowdock.com</a></div>
        </div>
        <div className="user-experience">

        </div>
      </div>

      <div className="card">
        <div className="Skills">
        <h2>Skills</h2>
        </div>

        <div>
          <p>Test1</p><p>Test2</p><p>Test3</p>
        </div>
      </div>

      <div className="card">
        <div>
        <h2>Projects</h2>
        </div>

        <div>
          <p>Test1</p><p>Test2</p><p>Test3</p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
