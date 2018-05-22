import React from 'react';
import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import HelpUsImplementThis from './HelpUsImplementThis';
import './Member.css';

const MemberSkills = () => (
  <Card className="card">
    <div className="skillsleft">
      <h2>Skills</h2>
    </div>
    <HelpUsImplementThis featureDescriptionUrl="https://github.com/codefordenver/members/issues/149">
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
  </Card>
);

export default MemberSkills;
