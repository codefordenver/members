import React from 'react';
import { waitForElement, cleanup } from 'react-testing-library';
import Header from '../Header';
import { mountWithAuth, mountWithContext } from '../../testUtils';
import localStorageMock from '../../mocks/localStorageMock';

const mockUser = {
  role: 'USER'
};

const mockAdminUser = {
  role: 'ADMIN'
};

afterEach(cleanup);

describe('Header', () => {
  describe('if the user is logged in', () => {
    it('should not show the login button', () => {
      const { queryByText } = mountWithAuth(
        <Header isAuthenticated={true} user={mockUser} />
      );
      expect(queryByText('Log In')).toBeNull();
    });

    describe('and the user is not admin', () => {
      it('should show the correct navigation links', async () => {
        const { getByText, queryByText } = mountWithAuth(
          <Header isAuthenticated={true} user={mockUser} />
        );

        await waitForElement(() => getByText('All Users'));

        expect(getByText('All Users')).toBeDefined();
        expect(getByText('All Projects')).toBeDefined();
        expect(queryByText('Admin Resources')).toBeNull();
      });
    });

    describe('and the user is admin', () => {
      it('should show the correct navigation links', async () => {
        const { getByText } = mountWithAuth(
          <Header isAuthenticated={true} user={mockAdminUser} />,
          {
            routes: ['/']
          }
        );

        await waitForElement(() => getByText('Admin Resources'));

        expect(getByText('All Users')).toBeDefined();
        expect(getByText('All Projects')).toBeDefined();
        expect(getByText('Admin Resources')).toBeDefined();
      });
    });
  });

  describe('if the user is not logged in', () => {
    beforeAll(() => {
      global.localStorage.getItem = jest.fn(() => null);
    });

    afterAll(() => {
      global.localStorage.getItem = localStorageMock.getItem;
    });

    it('not should show any navigation links', async () => {
      const { queryByText, getByText } = mountWithContext(
        <Header isAuthenticated={false} />,
        {
          routes: ['/']
        }
      );

      await waitForElement(() => getByText('Log In'));

      expect(queryByText('All Users')).toBeNull();
      expect(queryByText('All Projects')).toBeNull();
      expect(queryByText('Admin Resources')).toBeNull();
    });

    it('should show the login button', async () => {
      const { getByText } = mountWithContext(
        <Header isAuthenticated={false} />,
        {
          routes: ['/']
        }
      );

      await waitForElement(() => getByText('Log In'));
    });
  });
});
