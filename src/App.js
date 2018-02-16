import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { componentWithLoggedInUser, GoogleAnalyticsPageTracker } from './utils';
import { isAuthenticated } from './Auth';
import Header from './Header';
import ErrorBoundary from './utils/ErrorBoundary';
import NoMatch from './pages/NoMatch';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';
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
      main: '#ddd',
      dark: '#ccc',
      contrastText: '#000'
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
            <div className="App-body">
              <Switch>
                {isLoggedIn ? (
                  <LoggedInRoutes user={User} />
                ) : (
                  <LoggedOutRoutes />
                )}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default componentWithLoggedInUser(App);
