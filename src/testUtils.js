import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { regularUserMockResponses } from './mocks/withLoggedInUserMock';

export function mountWithContext(cmp, { routes = ['/'] } = {}, mocks) {
  return render(
    <MockedProvider mocks={mocks} removeTypename addTypename={false}>
      <MemoryRouter initialEntries={routes}>{cmp}</MemoryRouter>
    </MockedProvider>
  );
}

export function mountWithAuth(
  cmp,
  { routes = ['/'] } = {},
  additionalMocks = []
) {
  return mountWithContext(cmp, routes, [
    ...additionalMocks,
    ...regularUserMockResponses
  ]);
}
