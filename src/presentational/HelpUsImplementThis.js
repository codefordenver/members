import React from 'react';
import Tooltip from 'material-ui/Tooltip';

const HelpUsImplementThis = ({ children }) => {
  return <Tooltip title="Help us implement this feature">{children}</Tooltip>;
};

export default HelpUsImplementThis;
