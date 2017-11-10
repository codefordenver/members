import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const graphcoolApi = process.env.REACT_APP_GRAPHCOOL_API;
if (!graphcoolApi) {
  throw new Error('You need to export a REACT_APP_GRAPHCOOL_API');
}
console.log('Trying to connect to: ', graphcoolApi);
const networkInterface = createNetworkInterface({
  uri: graphcoolApi
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      if (localStorage.getItem("cfd-members-auth0IdToken")) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem(
          "cfd-members-auth0IdToken"
        )}`;
      }
      if (localStorage.getItem("nonce")) {
        req.options.headers.nonce = `Bearer ${localStorage.getItem("nonce")}`;
      }
      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
