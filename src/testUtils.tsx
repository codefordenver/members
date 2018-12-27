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
import { regularUserMockResponses } from './mocks/withLoggedInUserMock';
import AuthProvider from './utils/authentication/authProvider';

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
    ...regularUserMockResponses
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

export { fireEvent, wait, waitForElement, createHistory };
