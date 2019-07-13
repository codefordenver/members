import React, { Suspense } from 'react';
import {
  render,
  getByText,
  getByLabelText,
  within,
  fireEvent,
  wait,
  waitForElement,
  act
} from '@testing-library/react';
import { ApolloClient } from 'apollo-client';
import { Router } from 'react-router-dom';
import { MockLink, MockedResponse } from 'react-apollo/test-utils';
import { createMemoryHistory as createHistory } from 'history';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo-hooks';
import {
  regularUserMockResponses,
  adminUserServerMockResponses,
  roleMockResponses
} from './mocks/loggedInUserResponses';
import AuthProvider from './utils/authentication/authProvider';
import ErrorBoundary from './shared-components/ErrorBoundary';

interface CreateClientOptions {
  readonly addTypename?: boolean;

  readonly link?: ApolloLink;
  readonly mocks?: ReadonlyArray<MockedResponse>;
}

export function createClient({
  link,
  mocks = [],
  addTypename = true
}: CreateClientOptions = {}) {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename }),
    link: link ? link : new MockLink(mocks)
  });
}

export const suspenseFallbackText = 'Suspense Text';

export function mountWithContext(
  cmp: React.ReactElement<any>,
  { routes = ['/'] } = {},
  mocks?: ReadonlyArray<MockedResponse>,
  history = createHistory({ initialEntries: routes })
) {
  const client = createClient({ mocks, addTypename: true });

  // Using Router instead of MemoryRouter so we can override `history`
  // see note: https://github.com/ReactTraining/react-router/blob/0853628daff26a809e5384f352fada57753fc1c3/packages/react-router/modules/MemoryRouter.js#L31-L32
  return render(
    <ErrorBoundary>
      <AuthProvider>
        <Suspense fallback={<div>{suspenseFallbackText}</div>}>
          <ApolloProvider client={client}>
            <Router history={history}>{cmp}</Router>
          </ApolloProvider>
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
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

export { act, fireEvent, wait, waitForElement, createHistory };
