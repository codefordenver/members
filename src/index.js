import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CreateUser from "./CreateUser";
import registerServiceWorker from "./registerServiceWorker";

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj5iz3htl74ms012245dwlq4t"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      console.log('localStorage status', localStorage)
      if (localStorage.getItem("cfd-members-auth0IdToken")) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem(
          "cfd-members-auth0IdToken"
        )}`;
      }
      if (localStorage.getItem("nonce")) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem(
          "nonce"
        )}`;
      }
      console.log(req)
      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      {/* <div> */}
        <App />
        {/* <Route exact path="/" component={ App } />
        <Route pathname="/signup" component={ CreateUser } /> */}
      {/* </div> */}
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
