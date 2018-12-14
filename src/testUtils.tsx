import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import { regularUserMockResponses } from './mocks/withLoggedInUserMock';
import AuthProvider from './utils/authentication/authProvider';

export function mountWithContext(
  cmp: React.ReactElement<any>,
  { routes = ['/'] } = {},
  mocks?: ReadonlyArray<MockedResponse>
) {
  return render(
    <AuthProvider>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={routes}>{cmp}</MemoryRouter>
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
    ...regularUserMockResponses
  ]);
}
