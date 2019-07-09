import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { createClient } from '../testUtils';

it('renders without crashing', () => {
  const client = createClient();
  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
