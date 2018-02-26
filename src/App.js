import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withLoggedInUser, GoogleAnalyticsPageTracker } from './utils';
import { isAuthenticated } from './utils/Auth';
import Header from './sections/Header';
import ErrorBoundary from './utils/ErrorBoundary';
import AppBody from './AppBody';
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
  }
});

class App extends Component {
  render() {
    const { User } = this.props.data || {};
    const isLoggedIn = isAuthenticated();
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <GoogleAnalyticsPageTracker />
          <ErrorBoundary>
            <Header user={User} isAuthenticated={isLoggedIn} />
          </ErrorBoundary>
          <ErrorBoundary>
            <AppBody isLoggedIn={isLoggedIn} user={User} />
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withLoggedInUser(App);
