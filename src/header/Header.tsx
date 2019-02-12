import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from '../images/cfd-circle-icon-white.png';
import userIsAdmin from '../utils/userIsAdmin';
import MenuList from './Menu';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import './Header.css';
import { User } from '../sharedTypes';
import { GetUserComponent } from '../generated-models';

const AuthButtons = ({ isLoggingIn = false }) => {
  if (isLoggingIn) return <CircularProgress />;
  return (
    <Grid item>
      <Button color="secondary" onClick={AuthService.login}>
        Log In
      </Button>
      <Button color="secondary" onClick={AuthService.signUp}>
        Signup
      </Button>
    </Grid>
  );
};

const UserLinks = ({ user }: { user: User | null }) => (
  <Grid item>
    <Link className="Header-link" to="/volunteers">
      All Users
    </Link>
    <Link className="Header-link" to="/projects">
      All Projects
    </Link>
    {userIsAdmin(user || undefined) && (
      <Link className="Header-link" to="/admin">
        Admin Resources
      </Link>
    )}
  </Grid>
);

const Header = () => {
  return (
    <AuthenticationContext.Consumer>
      {context => (
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <img
                className="Header-logo"
                src={logo}
                alt="code for denver logo"
              />
            </Link>

            <Grid container justify="space-between" alignItems="center">
              {context.isAuthenticated() ? (
                <GetUserComponent variables={{ id: context.authData.userId }}>
                  {({ loading, data }) => {
                    if (loading) return <CircularProgress />;

                    if (!data || !data.user) {
                      alert('Your profile appears to be missing!');
                      return null;
                    }

                    return (
                      <React.Fragment>
                        <UserLinks user={data.user} />
                        <MenuList
                          avatar={data.user.picture || ''}
                          username={data.user.name || ''}
                          logout={AuthService.logout}
                        />
                      </React.Fragment>
                    );
                  }}
                </GetUserComponent>
              ) : (
                <AuthButtons isLoggingIn={context.isLoggingIn} />
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default Header;
