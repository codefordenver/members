import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getEnvironmentVariables } from './utils';
import './index.css';

const graphcoolApi = getEnvironmentVariables().graphcoolApi;
if (process.env.NODE_ENV === 'development') {
  console.log('Trying to connect to: ', graphcoolApi);
}

const httpLink = createHttpLink({ uri: graphcoolApi });
const middlewareLink = setContext(() => {
  let authHeader, nonceHeader;
  if (localStorage.getItem('cfd-members-auth0IdToken')) {
    authHeader = `Bearer ${localStorage.getItem('cfd-members-auth0IdToken')}`;
  }
  if (localStorage.getItem('nonce')) {
    nonceHeader = `Bearer ${localStorage.getItem('nonce')}`;
  }

  return {
    headers: {
      authorization: authHeader || null,
      nonce: nonceHeader || null
    }
  };
});

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename={getEnvironmentVariables().routingBase}>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
