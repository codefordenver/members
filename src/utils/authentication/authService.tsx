import auth0 from 'auth0-js';
import getEnvironmentVariables from '../getEnvironmentVariables';
import {
  ACCESS_TOKEN_KEY,
  BEARER_TOKEN,
  EXPIRES_AT_KEY,
  USER_ID,
  USER_PROFILE
} from '../../constants/storageKeys';

const env = getEnvironmentVariables();

class AuthService {
  returnUrl = window.location.origin;

  webAuth = new auth0.WebAuth({
    domain: env.auth0Domain,
    clientID: env.auth0ClientId,
    audience: env.auth0ApiIdentifier,
    redirectUri: `${window.location.origin}/callback`,
    responseType: 'token id_token',
    scope: 'openid email profile'
  });

  login = () => {
    (this.webAuth as any).authorize({ initialScreen: 'login' });
  };

  signUp = () => {
    // We use additional information in the auth0 custom login page to direct the user to sign up / login, but
    // this isn't compatible with the typings for auth0.js
    (this.webAuth as any).authorize({ initialScreen: 'signUp' });
  };

  parseAuthenticationResult = () => {
    return new Promise<{
      name: string;
      email: string;
      picture: string;
      expiresIn: number;
      accessToken: string;
    }>((resolve, reject) => {
      this.webAuth.parseHash((err, authResult) => {
        // Hash is in window.location.hash
        if (err) {
          reject(err);
        } else if (authResult && authResult.accessToken) {
          const { name, email, picture } = authResult.idTokenPayload;

          resolve({
            name,
            email,
            picture,
            expiresIn: authResult.expiresIn || 1000, // hopefully this fallback number is never reached
            accessToken: authResult.accessToken
          });
        }
      });
    });
  };

  setAuthSession = (
    auth0AccessToken: string,
    graphcoolAccessToken: string,
    userId: string,
    expiresIn: number
  ) => {
    const expiresAt = JSON.stringify(expiresIn * 1000 + Date.now());
    localStorage.setItem(ACCESS_TOKEN_KEY, auth0AccessToken);
    localStorage.setItem(USER_ID, userId);
    localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
    localStorage.setItem(BEARER_TOKEN, graphcoolAccessToken);
  };

  logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(EXPIRES_AT_KEY);
    localStorage.removeItem(BEARER_TOKEN);
    localStorage.removeItem(USER_PROFILE);
    window.location.href = '/';
  };

  getBearerToken = () => {
    localStorage.getItem(BEARER_TOKEN);
  };

  getSessionAuthData = () => {
    return {
      auth0AccessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
      graphcoolToken: localStorage.getItem(BEARER_TOKEN),
      userId: localStorage.getItem(USER_ID),
      expiresAt: Number(localStorage.getItem(EXPIRES_AT_KEY))
    };
  };

  isAuthenticated = (
    userId: string | null,
    expiresAt: number | null,
    auth0AccessToken: string | null,
    graphcoolToken: string | null
  ) => {
    return expiresAt &&
      Date.now() < expiresAt &&
      userId &&
      auth0AccessToken &&
      graphcoolToken
      ? true
      : false;
  };
}

export default new AuthService();
