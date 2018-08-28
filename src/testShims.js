import localStorageMock from './mocks/localStorageMock';

global.localStorage = localStorageMock;

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
