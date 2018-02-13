import React from 'react';
import Chip from 'material-ui/Chip';
import HelpUsImplementThis from './presentational/HelpUsImplementThis';
import LoadingIndicator from './presentational/LoadingIndicator';

const MemberProfile = ({ user }) => {
  if (!user) {
    return <LoadingIndicator />;
  }
  const { picture, name, description, githubName, flowdockName, email } = user;
  return (
    <div className="container">
      <div className="card">
        <div className="pic">
          <div className="container-nested">
            <img className="rounded profile-photo" src={picture} alt="avatar" />
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
        <HelpUsImplementThis>
          <div className="user-experience">
            <div className="contributions-nested">
              <div className="first-child">
                <div>
                  <span className="hours-contributed">1</span>
                  <div className="details">hours contributed</div>
                </div>
              </div>
              <div className="second-child">
                <div>
                  <span className="projects-completed">5</span>
                  <div className="details">projects completed</div>
                </div>
              </div>
              <div className="last-child">
                <div>
                  <span className="hours-contributed">35</span>
                  <div className="details">meetups attended</div>
                </div>
              </div>
            </div>
          </div>
        </HelpUsImplementThis>
      </div>

      <div className="card">
        <div className="skillsleft">
          <h2>Skills</h2>
        </div>
        <HelpUsImplementThis>
          <div className="skillsright">
            {['Python', 'SQL', 'Enterprise Geodatabases'].map(skill => (
              <Chip
                key={skill}
                className="skills-button"
                onDelete={() => false}
                label={skill}
              />
            ))}
          </div>
        </HelpUsImplementThis>
      </div>

      <div className="card">
        <div className="skillsleft">
          <h2>Projects</h2>
        </div>
        <HelpUsImplementThis>
          <div className="skillsright">
            {['Members Project', 'Owlet'].map(project => (
              <Chip
                key={project}
                className="skills-button"
                onDelete={() => false}
                label={project}
              />
            ))}
          </div>
        </HelpUsImplementThis>
      </div>
    </div>
  );
};

export default MemberProfile;
