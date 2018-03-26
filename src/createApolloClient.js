import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
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

export default function createApolloClient() {
  return new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}
