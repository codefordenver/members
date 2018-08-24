import React from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import HelpUsImplementThis from './HelpUsImplementThis';

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
