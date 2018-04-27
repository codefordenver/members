import React from 'react';
import { mountWithContext } from '../testUtils';
import App from '../App';

describe('when not logged in', () => {
  describe('when trying to navigate to /volunteers', () => {
    it('shows the landing page w/prompt to log in', () => {
      const wrapper = mountWithContext(<App />, {
        routes: ['/volunteers']
      });

      expect(wrapper.contains('Please sign up or log in')).toBe(true);
    });
  });

  describe('when trying to navigate to /projects', () => {
    it('shows the landing page w/prompt to log in', () => {
      const wrapper = mountWithContext(<App />, {
        routes: ['/projects']
      });

      expect(wrapper.contains('Please sign up or log in')).toBe(true);
    });
  });

  describe('when trying to navigate to /me', () => {
    it('shows the landing page w/prompt to log in', () => {
      const wrapper = mountWithContext(<App />, {
        routes: ['/me']
      });

      expect(wrapper.contains('Please sign up or log in')).toBe(true);
    });
  });

  describe('when trying to navigate to a non-existent page', () => {
    it('shows the 404 not found page', () => {
      const wrapper = mountWithContext(<App />, {
        routes: ['/foobar']
      });

      expect(wrapper.contains('404')).toBe(true);
    });
  });
});
