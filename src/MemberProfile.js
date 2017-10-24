import React from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const MemberProfile = ({ user, picture, name, description, githubName, flowdockName }) => {
  if (!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
  <MuiThemeProvider>
    <div className="container">
      <div className="card">
        <div className="pic">
          <div className="container-nested">
            <img src={picture} alt="avatar" />
          </div>
        </div>
        <div className="user-bio">
          <div className="container-nested">
            <h2> {name} </h2>
            <p>{description}</p>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
              <div className= "contact">
                <span>GitHub: </span><a href={`github.com/${githubName}`}>{githubName}</a>
              </div>
              <div className= "contact">
                <span>Flowdock: </span><a href={`flowdock.com/${flowdockName}`}>{flowdockName}</a>
              </div>
            </div>
          </div>
    <div className="user-experience">
      <div className="contributions-nested">
        <div className= "first-child">
          <div>
            <span className="hours-contributed">
              1
            </span>
              <div className="details">
              hours contributed
              </div>
          </div>
        </div>
        <div className= "second-child">
          <div>
            <span className="projects-completed">
                5
            </span>
              <div className="details">
              projects completed
              </div>
          </div>
        </div>
        <div className= "last-child">
          <div>
            <span className="hours-contributed">
                35
            </span>
              <div className="details">
              meetups attended
              </div>
          </div>
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
