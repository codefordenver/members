import React from 'react';
import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import HelpUsImplementThis from './HelpUsImplementThis';
import './Member.css';

const MemberProjects = () => (
  <Card className="Member-card">
    <div className="Member-skills-left">
      <h2>Projects</h2>
    </div>
    <HelpUsImplementThis>
      <div className="Member-skills-right">
        {['Members Project', 'Owlet'].map(project => (
          <Chip
            key={project}
            className="Member-skills-btn"
            onDelete={() => false}
            label={project}
          />
        ))}
      </div>
    </HelpUsImplementThis>
  </Card>
);

export default MemberProjects;
