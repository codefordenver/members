import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginAuth0 from './LoginAuth0';
import { logout } from './Auth';
import { getEnvironmentVariables } from './utils';
import LoadingIndicator from './presentational/LoadingIndicator';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';

const env = getEnvironmentVariables();

class Login extends Component {
  constructor() {
    super();
    this._logout = this._logout.bind(this);
  }

  _logout() {
    logout();
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <LoginAuth0 clientId={env.auth0ClientId} domain={env.auth0Domain} />
      );
    }
    if (!this.props.user) {
      return <LoadingIndicator />;
    }

    return (
      <Grid container alignItems="center">
        <Grid item>
          <Link to="/me">
            <Avatar src={this.props.user.picture} alt={this.props.user.name} />
          </Link>
        </Grid>
        <Grid item>
          <span>Hello, {this.props.user.name}</span>
        </Grid>
        <Grid item>
          <Button onClick={this._logout}>Log out</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Login);
