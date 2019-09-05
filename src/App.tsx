import React, { Suspense } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  Theme,
  WithStyles,
  makeStyles
} from '@material-ui/core/styles';
import GoogleAnalyticsPageTracker from './shared-components/GoogleAnalyticsPageTracker';
import RedirectOnNewLogin from './utils/RedirectOnNewLogin';
import Header from './header/Header';
import ErrorBoundary from './shared-components/ErrorBoundary';
import AppBody from './AppBody';
import AuthProvider from './utils/authentication/authProvider';
import LoadingIndicator from './shared-components/LoadingIndicator';
import './App.css';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E24E54'
    },
    secondary: {
      main: '#4ECAE2'
    }
  },
  spacing: 8,
  typography: {
    fontFamily: ['Roboto Condensed'].join(', '),
    h1: {
      fontSize: 56
    },
    body1: {
      fontSize: 18
    }
  }
});

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar
});

interface AppProps extends WithStyles<typeof styles> {}

// Apply Typography API styles to general tags
// This applies styling to generated tags from rendered .md files and such
const useStyles = makeStyles({
  '@global': {
    h1: {
      ...theme.typography.h1
    },
    h2: {
      ...theme.typography.h2
    },
    h3: {
      ...theme.typography.h3
    },
    p: {
      ...theme.typography.body1
    },
    li: {
      ...theme.typography.body1
    }
  }
});

const App: React.FC<AppProps> = ({ classes }) => {
  useStyles();

  return (
    <ErrorBoundary>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Suspense fallback={<LoadingIndicator />}>
            <CssBaseline />
            <div className="App">
              <GoogleAnalyticsPageTracker />
              <RedirectOnNewLogin />
              <ErrorBoundary>
                <Header />
              </ErrorBoundary>
              <ErrorBoundary>
                <Suspense fallback={<LoadingIndicator />}>
                  <AppBody />
                </Suspense>
              </ErrorBoundary>
            </div>
          </Suspense>
        </MuiThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default withStyles(styles, { withTheme: true })(App);
