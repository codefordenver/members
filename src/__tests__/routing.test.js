import React from 'react';
import { mountWithContext } from '../testUtils';
import { cleanup } from 'react-testing-library';
import App from '../App';
import { mockUnauthenticated } from '../mocks/localStorageMock';

afterEach(cleanup);

describe('when not logged in', () => {
  beforeAll(mockUnauthenticated);

  describe('when trying to navigate to /volunteers', () => {
    it('shows the 404 page', () => {
      const { getByText } = mountWithContext(<App />, {
        routes: ['/volunteers']
      });

      expect(getByText('404')).toBeDefined();
    });
  });
});
