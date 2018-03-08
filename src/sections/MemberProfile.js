import React from 'react';
import Card from 'material-ui/Card';
import HelpUsImplementThis from './HelpUsImplementThis';
import LoadingIndicator from './LoadingIndicator';
import MemberProjects from './MemberProjects';
import MemberSkills from './MemberSkills';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import './MemberProfile.css';

const MemberProfile = ({ user, onFormDataChange, editing }) => {
  if (!user) {
    return <LoadingIndicator />;
  }
  const { picture, name, description, githubName, flowdockName, email } = user;
  const commonProps = {
    onChange: onFormDataChange,
    editing
  };
  return (
    <div className="container">
      <Card className="card">
        <div className="pic">
          <div className="container-nested">
            <img className="rounded profile-photo" src={picture} alt="avatar" />
          </div>
        </div>
        <div className="user-bio">
          <div className="container-nested">
            <h2>
              <EditableText
                value={name}
                label="Name"
                name="name"
                {...commonProps}
              />
            </h2>
            <EditableMarkdown
              value={description}
              label="Description"
              name="description"
              {...commonProps}
            />
            <a href={`mailto:${email}`}>email</a>
            <div className="contact">
              <span className="social-links">GitHub: </span>
              {editing ? (
                <EditableText
                  value={githubName}
                  label="GitHub username"
                  name="githubName"
                  {...commonProps}
                />
              ) : (
                <a href={`https://github.com/${githubName}`}>{githubName}</a>
              )}
            </div>
            <div className="contact">
              <span className="social-links">Flowdock: </span>
              <EditableText
                value={flowdockName}
                label="Flowdock username"
                name="flowdockName"
                {...commonProps}
              />
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
      </Card>

      <MemberSkills />
      <MemberProjects />
    </div>
  );
};

export default MemberProfile;
