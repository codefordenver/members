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
    this.webAuth.authorize();
  };

  signUp = () => {
    this.webAuth.authorize();
  };

  parseAuthenticationResult = () => {
    return new Promise((resolve, reject) => {
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
            expiresIn: authResult.expiresIn,
            accessToken: authResult.accessToken
          });
        }
      });
    });
  };

  setAuthSession = (
    auth0AccessToken,
    graphcoolAccessToken,
    userId,
    expiresIn
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
  };

  getBearerToken = () => {
    localStorage.getItem(BEARER_TOKEN);
  };

  setAuthProfileSession = user => {
    localStorage.setItem(USER_PROFILE, JSON.stringify(user));
  };

  getSessionAuthData = () => {
    const rawProfile = localStorage.getItem(USER_PROFILE);
    const userProfile =
      rawProfile === 'undefined' || !rawProfile ? null : JSON.parse(rawProfile);

    return {
      auth0AccessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
      graphcoolToken: localStorage.getItem(BEARER_TOKEN),
      userId: localStorage.getItem(USER_ID),
      expiresAt: localStorage.getItem(EXPIRES_AT_KEY),
      userProfile
    };
  };
}

export default new AuthService();
