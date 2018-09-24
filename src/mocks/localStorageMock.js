import {
  ACCESS_TOKEN_KEY,
  BEARER_TOKEN,
  USER_ID,
  EXPIRES_AT_KEY
} from '../constants/storageKeys';

export default {
  getItem: jest.fn(key => {
    switch (key) {
      case ACCESS_TOKEN_KEY:
        return 'accessToken';
      case EXPIRES_AT_KEY:
        return 2535419869506;
      case USER_ID:
        return 'mocked-test-user-id';
      case BEARER_TOKEN:
        return 'bearerToken';
      default:
        return null;
    }
  }),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
