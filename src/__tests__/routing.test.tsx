import React from 'react';
import { mountWithContext } from '../testUtils';
import App from '../App';
import { mockUnauthenticated } from '../mocks/localStorageMock';

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
