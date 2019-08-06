import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// The presentation of the indicator is delayed to improve perceived performance
// See: https://material-ui-next.com/demos/progress/#delaying-appearance
const PROGRESS_DELAY = 1000;

interface Props {
  color?: 'primary' | 'secondary' | 'inherit';
}

const LoadingIndicator: React.FC<Props> = ({ color }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsShown(true), PROGRESS_DELAY);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isShown) {
    return <CircularProgress color={color} />;
  }
  return null;
};

export default LoadingIndicator;
