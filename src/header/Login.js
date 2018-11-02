import React, { Component } from 'react';
import { compose } from 'react-apollo';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import LoginAuth0 from './LoginAuth0';
import { getEnvironmentVariables, withLoggedInUser } from '../utils';
import withAuthSession from '../utils/withAuthSession';
import MenuList from './Menu';

const env = getEnvironmentVariables();

class Login extends Component {
  render() {
    const { isAuthenticated, user } = this.props;
    if (!isAuthenticated) {
      return (
        <LoginAuth0
          clientId={env.auth0ClientId}
          domain={env.auth0Domain}
          client={this.props.client}
        />
      );
    }
    if (!user) {
      return <LoadingIndicator color="secondary" />;
    }

    return (
      <MenuList
        avatar={user.picture}
        username={user.name}
        logout={this.props.logout}
      />
    );
  }
}

export default compose(withLoggedInUser, withAuthSession)(Login);
