import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MemberResources from './MemberResources';
import MemberProfile from './MemberProfile';
import MemberProfileEdit from './MemberProfileEdit';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import EmailList from './EmailList';
import { componentWithLoggedInUser } from './utils';
import Header from './Header';
import UsersList from './UsersList';
import MemberProfilePage from './MemberProfilePage';
import ErrorBoundary from './utils/ErrorBoundary';
import NoMatch from './pages/NoMatch';
import './App.css';

const theme = createMuiTheme();

class App extends Component {
  render() {
    const { User } = this.props.data || {};
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <ErrorBoundary>
            <Header user={User} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={MemberResources} />
              <Route
                exact
                path="/me"
                render={() => <MemberProfile user={User} />}
              />
              <Route exact path="/me/edit" component={MemberProfileEdit} />
              <Route exact path="/admin/onboarding" component={EmailList} />
              <Route exact path="/volunteers" component={UsersList} />
              <Route
                exact
                path="/volunteers/:id"
                component={MemberProfilePage}
              />
              <Route component={NoMatch} />
            </Switch>
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default componentWithLoggedInUser(App);
