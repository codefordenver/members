import React from "react";
import Chip from 'material-ui/Chip';

const MemberProfile = ({user}) => {
  if (!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const {picture, name, description, githubName, flowdockName, email} = user;
  return (
    <div className="container">
      <div className="card">
        <div className="pic">
          <div className="container-nested">
            <img className="rounded" src={picture} alt="avatar"/>
          </div>
        </div>
        <div className="user-bio">
          <div className="container-nested">
            <h2> {name} </h2>
            <p>{description}</p>
            <a href={`mailto:${email}`}>email</a>
            <div className="contact">
              <span className="social-links">GitHub: </span>
              <a href={`github.com/${githubName}`}>{githubName}</a>
            </div>
            <div className="contact">
              <span className="social-links">Flowdock: </span>
              <a href={`flowdock.com/${flowdockName}`}>{flowdockName}</a>
            </div>
          </div>
        </div>
        <div className="user-experience">
          <div className="contributions-nested">
            <div className="first-child">
              <div>
                <span className="hours-contributed">
                  1
                </span>
                <div className="details">
                  hours contributed
                </div>
              </div>
            </div>
            <div className="second-child">
              <div>
                <span className="projects-completed">
                    5
                </span>
                <div className="details">
                  projects completed
                </div>
              </div>
            </div>
            <div className="last-child">
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
                onRequestDelete={() => {
                  return false
                }}>
            Python
          </Chip>
          <Chip className="skills-button"
                onRequestDelete={() => {
                  return false
                }}>
            SQL
          </Chip>
          <Chip className="skills-button"
                onRequestDelete={() => {
                  return false
                }}>
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
                onRequestDelete={() => {
                  return false
                }}>
            Python
          </Chip>
          <Chip className="skills-button"
                onRequestDelete={() => {
                  return false
                }}>
            SQL
          </Chip>
          <Chip className="skills-button"
                onRequestDelete={() => {
                  return false
                }}>
            Enterprise Geodatabases
          </Chip>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
