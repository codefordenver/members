import React from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const MemberProfile = ({ user }) => {
  return (
  <MuiThemeProvider>
    <div className="container">
      <div className="card">
        <div className="pic">
          <div className="container-nested">
            <img src="http://placehold.it/225x225"/>
          </div>
        </div>
        <div className="user-bio">
          <div className="container-nested">
            <h2>FirstName LastName</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."</p>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
              <div className= "contact">
                <span>GitHub: </span><a href="github.com">github.com</a>
              </div>
              <div className= "contact">
                <span>Flowdock: </span><a href= "flowdock.com">flowdock.com</a>
              </div>
            </div>
          </div>
    <div className="user-experience">
      <div className="contributions-nested">
        <div className= "contributions">
          <p>
            <span>
              <div className="number">
                150
              </div>
            </span> 
              <div className="details">
              hours contributed
              </div>
          </p>
        </div>
        <div className= "contributions">
          <p>
            <span>
              <div className="number">
                5
              </div>
            </span> 
              <div className="details">
              projects completed
              </div>
          </p>
        </div>
        <div className= "contributions">
          <p>
            <span>
              <div className="number">
                35
              </div>
            </span> 
              <div className="details">
              meetups attended
              </div>
          </p>
        </div>
      </div>
    </div>
  </div>

      <div className="card">
        <div className="skillsleft">
          <h2>Skills</h2>
        </div>
        <div className="skillsright"> 
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            Python
          </Chip>
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            SQL
          </Chip>
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            Enterprise Geodatabases
          </Chip>
        </div>
      </div> 

      <div className="card">
        <div className="skillsleft">
          <h2>Projects</h2>
        </div>
        <div className="skillsright"> 
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            Python
          </Chip>
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            SQL
          </Chip>
          <Chip className="skills-button" 
          onRequestDelete= {()=> {return false}}>
            Enterprise Geodatabases
          </Chip>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
  );
};

export default MemberProfile;
