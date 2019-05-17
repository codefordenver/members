import React from 'react';
import {
  render,
  getByText,
  getByLabelText,
  within,
  fireEvent,
  wait,
  waitForElement
} from 'react-testing-library';
import { Router } from 'react-router-dom';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import { createMemoryHistory as createHistory } from 'history';
import {
  regularUserMockResponses,
  adminUserServerMockResponses,
  roleMockResponses
} from './mocks/loggedInUserResponses';
import AuthProvider from './utils/authentication/authProvider';
import { Observable } from 'rxjs';
import mergeResolvers from './utils/mergeResolvers';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import faker from 'faker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fs from 'fs';
import path from 'path';

export function mountWithContext(
  cmp: React.ReactElement<any>,
  { routes = ['/'] } = {},
  mocks?: ReadonlyArray<MockedResponse>,
  history = createHistory({ initialEntries: routes })
) {
  // Using Router instead of MemoryRouter so we can override `history`
  // see note: https://github.com/ReactTraining/react-router/blob/0853628daff26a809e5384f352fada57753fc1c3/packages/react-router/modules/MemoryRouter.js#L31-L32
  return render(
    <AuthProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>{cmp}</Router>
      </MockedProvider>
    </AuthProvider>
  );
}

export function mountWithAuth(
  cmp: React.ReactElement<any>,
  { routes = ['/'] } = {},
  additionalMocks = []
) {
  return mountWithContext(cmp, { routes }, [
    ...additionalMocks,
    ...regularUserMockResponses,
    ...adminUserServerMockResponses,
    ...roleMockResponses
  ]);
}

function updateTextInput(
  container: HTMLElement,
  labelText: string,
  value: string
) {
  const headerImageInput = getByLabelText(
    container,
    labelText
  ) as HTMLInputElement;
  fireEvent.change(headerImageInput, { target: { value } });
  return headerImageInput;
}

function getButtonByText(container: HTMLElement, text: string) {
  const btn = getByText(container, text).closest('button');
  if (!btn) {
    throw new Error(`No button found with text "${text}"`);
  }
  return btn;
}

export function getQueries(container = document.body) {
  return {
    ...within(container),
    updateTextInput: updateTextInput.bind(null, container),
    getButtonByText: getButtonByText.bind(null, container)
  };
}

/*************************************************************
 * Apollo testing providers for different scenarios
 *
 * Adapted from this excellent blog post:
 * https://medium.freecodecamp.org/a-new-approach-to-mocking-graphql-data-1ef49de3d491
 **************************************************************/

export const LoadingProvider: React.FC = ({ children }) => {
  // @ts-ignore
  const link = new ApolloLink(operation => {
    return new Observable(() => {});
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

type ErrorType = { message: string };
type ErrorProviderProps = {
  graphQLErrors?: ErrorType[];
};

// This is just a link that swallows all operations and returns the same thing
// for every request: The specified error.
export const ErrorProvider: React.FC<ErrorProviderProps> = ({
  graphQLErrors,
  children
}) => {
  // @ts-ignore
  const link = new ApolloLink(operation => {
    return new Observable(observer => {
      observer.next({
        errors: graphQLErrors || [
          { message: 'Unspecified error from ErrorProvider.' }
        ]
      });
      observer.complete();
    });
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const schema = makeExecutableSchema({ typeDefs: schemaString });
const globalMocks = {
  Todo: () => ({
    text: () => faker.lorem.sentence(),
    completed: () => faker.random.boolean()
  })
};

type ApolloMockingProviderProps = {
  customResolvers: any;
};

export const ApolloMockingProvider: React.FC<ApolloMockingProviderProps> = ({
  customResolvers,
  children
}) => {
  const mocks = mergeResolvers(globalMocks, customResolvers);

  addMockFunctionsToSchema({ schema, mocks });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { fireEvent, wait, waitForElement, createHistory };
