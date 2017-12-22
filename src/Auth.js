const ACCESS_TOKEN_KEY = 'access_token';
const EXPIRES_AT_KEY = 'expires_at';
const USER_ID = 'user_id';
const localStorage = window.localStorage;

export function setAuthSession(authResult, userId) {
  const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
  localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
  localStorage.setItem(USER_ID, userId);
  localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
}

export function getAuthSession() {
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    userId: localStorage.getItem(USER_ID),
    expiresAt: localStorage.getItem(EXPIRES_AT_KEY)
  };
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(EXPIRES_AT_KEY);
}

export function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT_KEY));
  const authenticated = Boolean(localStorage.getItem(USER_ID)) && Date.now() < expiresAt;
  if (!authenticated) {
    logout();
  }
  return authenticated;
}
