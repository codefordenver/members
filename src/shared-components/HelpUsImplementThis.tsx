import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './HelpUsImplementThis.css';

interface Props {
  featureDescriptionUrl: string;
}

const HelpUsImplementThis: React.SFC<Props> = ({
  children,
  featureDescriptionUrl = 'https://waffle.io/codefordenver/members'
}) => {
  return (
    <div className="HelpUsImplementThis">
      <Tooltip title="Help us implement this feature">
        <a
          href={featureDescriptionUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </Tooltip>
    </div>
  );
};

export default HelpUsImplementThis;
