import React from 'react';
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
class Analytics extends React.Component<Props> {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(googleAnalyticsTrackingId);
    }
    sendPageChange(this.props.location.pathname, this.props.location.search);
  }

  componentDidUpdate(prevProps: Props) {
    const { pathname, search } = this.props.location;
    if (
      pathname !== prevProps.location.pathname ||
      search !== prevProps.location.search
    ) {
      sendPageChange(pathname, search);
    }
  }

  render() {
    return null;
  }
}

const GoogleAnalyticsPageTracker = () => {
  return <Route component={Analytics} />;
};

export default GoogleAnalyticsPageTracker;
