import React from 'react';
import Card from '@material-ui/core/Card';
import HelpUsImplementThis from './HelpUsImplementThis';
import LoadingIndicator from './LoadingIndicator';
import MemberProjects from './MemberProjects';
import MemberSkills from './MemberSkills';
import EditableText from '../forms/EditableText';
import EditableMarkdown from '../forms/EditableMarkdown';
import './Member.css';

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
    <div className="Member-container">
      <Card className="Member-card">
        <div className="Member-pic">
          <div className="Member-div">
            <img className="rounded Member-photo" src={picture} alt="avatar" />
          </div>
        </div>
        <div className="Member-bio">
          <div className="Member-div">
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
            <div className="Member-contact">
              <span className="Member-social-links">GitHub: </span>
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
            <div className="Member-contact">
              <span className="Member-social-links">Flowdock: </span>
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
          <div className="Member-experience">
            <div className="Member-contributions">
              <div>
                <span className="Member-hours">1</span>
                <div className="Member-details">hours contributed</div>
              </div>
              <div>
                <span className="Member-projects">5</span>
                <div className="Member-details">projects involved</div>
              </div>
              <div>
                <span className="Member-hours">35</span>
                <div className="Member-details">meetups attended</div>
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
