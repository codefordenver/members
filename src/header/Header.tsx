import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from '../images/cfd-circle-icon-white.png';
import userIsAdmin from '../utils/userIsAdmin';
import MenuList from './Menu';
import AuthenticationContext from '../utils/authentication/authContext';
import AuthService from '../utils/authentication/authService';
import { User } from '../sharedTypes';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import { useUser } from '../utils/commonGraphql';
import './Header.css';

const AuthButtons = ({ isLoggingIn = false }) => {
  if (isLoggingIn) return <LoadingIndicator />;
  return (
    <Grid item>
      <Button color="secondary" onClick={AuthService.login}>
        Log In
      </Button>
      <Button color="secondary" onClick={AuthService.signUp}>
        Sign Up
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

const LoggedInHeaderContent: React.FC<{ userId: string }> = ({ userId }) => {
  const { data } = useUser(userId);
  if (!data || !data.user) return null;

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
};

const Header: React.FC = () => {
  const authContext = useContext(AuthenticationContext);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/">
          <img className="Header-logo" src={logo} alt="code for denver logo" />
        </Link>

        <Grid container justify="space-between" alignItems="center">
          <Suspense fallback={<LoadingIndicator />}>
            {authContext.isAuthenticated() ? (
              <LoggedInHeaderContent userId={authContext.authData.userId} />
            ) : (
              <AuthButtons isLoggingIn={authContext.isLoggingIn} />
            )}
          </Suspense>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
