import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj5iz3htl74ms012245dwlq4t"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      if (localStorage.getItem("auth0IdToken")) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem(
          "auth0IdToken"
        )}`;
      }
      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

ReactDOM.render((
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
