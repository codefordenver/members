const ACCESS_TOKEN_KEY = 'access_token';
const EXPIRES_AT_KEY = 'expires_at';
const USER_ID = 'user_id';

export function setAuthSession(authResult, userId) {
  const localStorage = global.localStorage;
  const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + Date.now());
  localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
  localStorage.setItem(USER_ID, userId);
  localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
}

export function getAuthSession() {
  const localStorage = global.localStorage;
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    userId: localStorage.getItem(USER_ID),
    expiresAt: localStorage.getItem(EXPIRES_AT_KEY)
  };
}

export function logout() {
  const localStorage = global.localStorage;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(EXPIRES_AT_KEY);
}

export function isAuthenticated() {
  const localStorage = global.localStorage;
  const expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT_KEY));
  const authenticated =
    Boolean(localStorage.getItem(USER_ID)) && Date.now() < expiresAt;
  if (!authenticated) {
    logout();
  }
  return authenticated;
}
