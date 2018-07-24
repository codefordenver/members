import React from 'react';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';

const ErrorBox = ({ children, ...props }) => {
  return (
    <Typography color="error">
      <ErrorIcon />
      {children}
    </Typography>
  );
};

export default ErrorBox;
