import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';
import { GoogleAnalyticsPageTracker } from './utils';
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

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
