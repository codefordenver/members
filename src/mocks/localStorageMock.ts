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

interface ILocalStorageData {
  [key: string]: string | void;
}

interface ILocalStorage {
  getItem: () => string | void;
  setItem: () => void;
  removeItem: () => void;
  clear: () => void;
}

const adminLocalStorageData: ILocalStorageData = {
  [ACCESS_TOKEN_KEY]: 'accessToken',
  [EXPIRES_AT_KEY]: '2535419869506',
  [USER_ID]: adminUserId,
  [BEARER_TOKEN]: 'bearerToken'
};

export const adminUser = {
  ...unauthenticated,
  getItem: jest.fn(key => {
    return adminLocalStorageData[key];
  })
};

const regularLocalStorageData: ILocalStorageData = {
  [ACCESS_TOKEN_KEY]: 'accessToken',
  [EXPIRES_AT_KEY]: '2535419869506',
  [USER_ID]: regularUserId,
  [BEARER_TOKEN]: 'bearerToken'
};

export const regularUser = {
  ...unauthenticated,
  getItem: jest.fn(key => {
    return regularLocalStorageData[key] || 'asdf';
  })
};

function mockLocalStorageWith(fakeLocalStorage: ILocalStorage) {
  Object.defineProperty(window, 'localStorage', {
    value: fakeLocalStorage,
    configurable: true,
    writable: true
  });
}

export const mockAdminUser = () => {
  mockLocalStorageWith(adminUser);
};

export const mockRegularUser = () => {
  mockLocalStorageWith(regularUser);
};

export const mockUnauthenticated = () => {
  mockLocalStorageWith(unauthenticated);
};
