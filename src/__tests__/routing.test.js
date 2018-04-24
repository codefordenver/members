import React from 'react';
import { mountWithContext } from '../testUtils';
import App from '../App';

describe('when not logged in', () => {
  describe('when trying to navigate to /volunteers', () => {
    it('shows the 404 page', () => {
      const wrapper = mountWithContext(<App />, {
        routes: ['/volunteers']
      });

      expect(wrapper.contains('404')).toBe(true);
    });
  });
});
