import React, { Suspense } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import GoogleAnalyticsPageTracker from './shared-components/GoogleAnalyticsPageTracker';
import RedirectOnNewLogin from './utils/RedirectOnNewLogin';
import Header from './header/Header';
import ErrorBoundary from './shared-components/ErrorBoundary';
import AppBody from './AppBody';
import AuthProvider from './utils/authentication/authProvider';
import LoadingIndicator from './shared-components/LoadingIndicator';
import './App.css';

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
    fontFamily: ['Roboto Condensed'].join(', ')
  }
});

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar
});

interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = ({ classes }) => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Suspense fallback={<LoadingIndicator />}>
            <div className="App">
              <GoogleAnalyticsPageTracker />
              <RedirectOnNewLogin />
              <ErrorBoundary>
                <Header />
              </ErrorBoundary>
              <ErrorBoundary>
                {/* <div className={classes.toolbar} /> */}
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
