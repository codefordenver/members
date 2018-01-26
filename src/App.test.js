import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import * as getEnvironmentVariableModule from './utils/getEnvironmentVariables';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
getEnvironmentVariableModule.default = jest.fn().mockReturnValue({
  auth0ClientId: '',
  auth0Domain: '',
  graphcoolApi: ''
});

const App = require('./App').default;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </MockedProvider>,
    div
  );
});
