import React from 'react';
import { mountWithContext, mountWithAuth, wait } from '../testUtils';
import App from '../App';
import {
  mockUnauthenticated,
  mockRegularUser
} from '../mocks/localStorageMock';

describe('when not logged in', () => {
  beforeEach(mockUnauthenticated);

  describe('when trying to navigate to /volunteers', () => {
    it('shows the 404 page', () => {
      const { getByText } = mountWithContext(<App />, {
        routes: ['/volunteers']
      });

      expect(getByText('404')).toBeInTheDocument();
    });
  });
});

describe('when logged in', () => {
  beforeEach(mockRegularUser);

  describe('when trying to navigate to /abcd', () => {
    it('shows 404 page', async () => {
      const { getByText } = mountWithAuth(<App />, {
        routes: ['/abcd']
      });

      await wait(() => expect(getByText('404')).toBeInTheDocument());
    });
  });
});
