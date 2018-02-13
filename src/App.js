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

const theme = createMuiTheme();

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
            <Switch>
              {isLoggedIn ? (
                <LoggedInRoutes user={User} />
              ) : (
                <LoggedOutRoutes />
              )}
              <Route component={NoMatch} />
            </Switch>
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default componentWithLoggedInUser(App);
