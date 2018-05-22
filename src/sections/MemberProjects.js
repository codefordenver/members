import React from 'react';
import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import HelpUsImplementThis from './HelpUsImplementThis';
import './Member.css';

const MemberProjects = () => (
  <Card className="card">
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
  </Card>
);

export default MemberProjects;
