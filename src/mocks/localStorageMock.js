import {
  ACCESS_TOKEN_KEY,
  BEARER_TOKEN,
  USER_ID,
  EXPIRES_AT_KEY
} from '../constants/storageKeys';

import { regularUserId, adminUserId } from '../testData';

export const unauthenticated = {
  getItem: jest.fn(key => null),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

export const adminUser = {
  ...unauthenticated,
  getItem: jest.fn(key => {
    switch (key) {
      case ACCESS_TOKEN_KEY:
        return 'accessToken';
      case EXPIRES_AT_KEY:
        return 2535419869506;
      case USER_ID:
        return adminUserId;
      case BEARER_TOKEN:
        return 'bearerToken';
      default:
        return null;
    }
  })
};

export const regularUser = {
  ...unauthenticated,
  getItem: jest.fn(key => {
    switch (key) {
      case ACCESS_TOKEN_KEY:
        return 'accessToken';
      case EXPIRES_AT_KEY:
        return 2535419869506;
      case USER_ID:
        return regularUserId;
      case BEARER_TOKEN:
        return 'bearerToken';
      default:
        return null;
    }
  })
};

export const mockAdminUser = () => {
  global.localStorage = adminUser;
};

export const mockRegularUser = () => {
  global.localStorage = regularUser;
};

export const mockUnauthenticated = () => {
  global.localStorage = unauthenticated;
};
