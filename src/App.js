import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';
import GoogleAnalyticsPageTracker from './shared-components/GoogleAnalyticsPageTracker';
import Header from './header/Header';
import ErrorBoundary from './shared-components/ErrorBoundary';
import AppBody from './AppBody';
import AuthenticationContext from './utils/authentication/authContext';
import AuthService from './utils/authentication/authService';
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

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authContext: {
        authData: {},
        isAuthenticated: this.isAuthenticated,
        setCurrentUser: this.setCurrentUser
      }
    };
  }

  componentDidMount = () => {
    // Sync auth session stored in the localStorage with Context
    // TBH, I'm not sure if we even need context
    this.setCurrentUser(AuthService.getSessionAuthData());
  };

  isAuthenticated = () => {
    const {
      userId,
      expiresAt,
      auth0AccessToken,
      graphcoolToken
    } = this.state.authContext.authData;
    return (
      Date.now() < expiresAt && userId && auth0AccessToken && graphcoolToken
    );
  };

  setCurrentUser = authData => {
    this.setState({
      authContext: {
        ...this.state.authContext,
        authData
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <AuthenticationContext.Provider value={this.state.authContext}>
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
      </AuthenticationContext.Provider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
