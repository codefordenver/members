import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getEnvironmentVariables } from './utils';
import { getBearerTokenForAuthorization } from './utils/withAuthSession';

const graphcoolApi = getEnvironmentVariables().graphcoolApi;
if (process.env.NODE_ENV === 'development') {
  console.log('Trying to connect to: ', graphcoolApi);
}

const httpLink = createHttpLink({ uri: graphcoolApi });
const middlewareLink = setContext(() => {
  let authHeader;
  const bearerToken = getBearerTokenForAuthorization();
  if (bearerToken) {
    authHeader = `Bearer ${bearerToken}`;
  }

  return {
    headers: {
      authorization: authHeader || null
      // TODO: Figure out if we should include a nonce header for graphcool
    }
  };
});

// Create a RestLink for the REST API
// If you are using multiple link types, restLink should go before httpLink,
// as httpLink will swallow any calls that should be routed through rest!
const restLink = new RestLink({
  endpoints: {
    github: 'https://api.github.com/'
  },
  credentials: 'omit'
});

export default function createApolloClient() {
  return new ApolloClient({
    link: ApolloLink.from([restLink, middlewareLink, httpLink]),
    cache: new InMemoryCache()
  });
}
