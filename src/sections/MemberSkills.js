import React from 'react';
import Card from '@material-ui/core/Card';
import EditableChips from '../forms/EditableChips';

const MemberSkills = ({ skills, editing }) => (
  <Card className="Member-card">
    <div className="Member-skills-left">
      <h2>Skills</h2>
    </div>
    <div className="Member-skills-right">
      <EditableChips value={skills} editing={editing} />
    </div>
  </Card>
);

export default MemberSkills;
