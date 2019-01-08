import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import GoogleAnalyticsPageTracker from './shared-components/GoogleAnalyticsPageTracker';
import Header from './header/Header';
import ErrorBoundary from './shared-components/ErrorBoundary';
import AppBody from './AppBody';
import AuthProvider from './utils/authentication/authProvider';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ea8589',
      main: '#E24E54',
      dark: '#c5262c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#eee',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar
});

interface AppProps extends WithStyles<typeof styles> {}

class App extends Component<AppProps> {
  render() {
    const { classes } = this.props;
    return (
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <GoogleAnalyticsPageTracker />
            <ErrorBoundary>
              <Header />
            </ErrorBoundary>
            <ErrorBoundary>
              <div className={classes.toolbar} />
              <AppBody />
            </ErrorBoundary>
          </div>
        </MuiThemeProvider>
      </AuthProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
