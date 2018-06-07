import React from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import HelpUsImplementThis from './HelpUsImplementThis';
import './Member.css';

const MemberSkills = () => (
  <Card className="Member-card">
    <div className="Member-skills-left">
      <h2>Skills</h2>
    </div>
    <HelpUsImplementThis featureDescriptionUrl="https://github.com/codefordenver/members/issues/149">
      <div className="Member-skills-right">
        {['Python', 'SQL', 'Enterprise Geodatabases'].map(skill => (
          <Chip
            key={skill}
            className="Member-skills-btn"
            onDelete={() => false}
            label={skill}
          />
        ))}
      </div>
    </HelpUsImplementThis>
  </Card>
);

export default MemberSkills;
