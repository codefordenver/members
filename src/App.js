import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { GoogleAnalyticsPageTracker } from './utils';
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
  constructor() {
    super();
    this.refreshApp = this.refreshApp.bind(this);
  }

  refreshApp() {
    this.forceUpdate();
  }

  render() {
    const isLoggedIn = isAuthenticated();
    const newUserId = localStorage.getItem('user_id');
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <GoogleAnalyticsPageTracker />
          <ErrorBoundary>
            <Header
              refreshApp={this.refreshApp}
              isAuthenticated={isLoggedIn}
              newUserId={newUserId}
            />
          </ErrorBoundary>
          <ErrorBoundary>
            <AppBody isLoggedIn={isLoggedIn} />
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
