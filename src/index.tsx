import 'babel-polyfill';
import './config/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getEnvironmentVariables } from './utils';
import createApolloClient from './createApolloClient';
import './index.css';

const client = createApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter basename={getEnvironmentVariables().routingBase}>
        <App />
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
