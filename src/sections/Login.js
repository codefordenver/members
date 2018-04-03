import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import LoadingIndicator from './LoadingIndicator';
import LoginAuth0 from './LoginAuth0';
import { getEnvironmentVariables, withLoggedInUser } from '../utils';
import withAuthSession from '../utils/withAuthSession';

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
      <Grid container alignItems="center">
        <Grid item>
          <Link to="/me">
            <Avatar src={user.picture} alt={user.name} />
          </Link>
        </Grid>
        <Grid item>
          <span>Hello, {user.name}</span>
        </Grid>
        <Grid item>
          <Button color="secondary" onClick={this.props.logout}>
            Log out
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default compose(withLoggedInUser, withAuthSession)(Login);
