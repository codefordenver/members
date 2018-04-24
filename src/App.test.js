import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

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
