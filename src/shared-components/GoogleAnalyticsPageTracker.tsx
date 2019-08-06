import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

const googleAnalyticsTrackingId = 'UA-59161471-2'; // should this come in from an environment variable?

function sendPageChange(pathname: string, search = '') {
  const page = pathname + search;
  if (process.env.NODE_ENV === 'production') {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  } else if (process.env.NODE_ENV === 'development') {
    console.info('routing to', page);
  }
}

interface Props {
  location: {
    pathname: string;
    search: string;
  };
}

// NOTE: Originally copied and modified from https://github.com/react-ga/react-ga/issues/122#issuecomment-353101102
const Analytics: React.FC<Props> = ({ location }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(googleAnalyticsTrackingId);
    }
  }, []);

  useEffect(
    () => {
      sendPageChange(location.pathname, location.search);
    },
    [location.pathname, location.search]
  );

  return null;
};

const GoogleAnalyticsPageTracker = () => {
  return <Route component={Analytics} />;
};

export default GoogleAnalyticsPageTracker;
