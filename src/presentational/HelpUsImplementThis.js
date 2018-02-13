import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import './HelpUsImplementThis.css';

const HelpUsImplementThis = ({
  children,
  featureDescriptionUrl = 'https://waffle.io/codefordenver/members'
}) => {
  return (
    <Tooltip
      className="HelpUsImplementThis"
      title="Help us implement this feature"
    >
      <a href={featureDescriptionUrl} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Tooltip>
  );
};

export default HelpUsImplementThis;
