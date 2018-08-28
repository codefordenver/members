import React from 'react';
import { queryByText, getByText, waitForElement } from 'react-testing-library';
import Header from '../Header';
import { mountWithAuth, mountWithContext } from '../../testUtils';
import localStorageMock from '../../mocks/localStorageMock';

const mockUser = {
  role: 'USER'
};

const mockAdminUser = {
  role: 'ADMIN'
};

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
        const { getByText, queryByText, container } = mountWithAuth(
          <Header isAuthenticated={true} user={mockUser} />
        );

        await waitForElement(() => getByText('All Users'));

        expect(getByText('All Users')).toBeDefined();
        expect(getByText('All Projects')).toBeDefined();
        expect(queryByText('Admin Resources')).toBeNull();
        expect(container).toMatchSnapshot();
      });
    });

    describe('and the user is admin', () => {
      it('should show the correct navigation links', () => {
        const { getByText, container } = mountWithAuth(
          <Header isAuthenticated={true} user={mockAdminUser} />,
          {
            routes: ['/']
          }
        );

        expect(getByText('All Users')).toBeDefined();
        expect(getByText('All Projects')).toBeDefined();
        expect(getByText('Admin Resources')).toBeDefined();
        expect(container).toMatchSnapshot();
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

    it('not should show any navigation links', () => {
      const { queryByText, container } = mountWithContext(<Header />, {
        routes: ['/']
      });

      expect(queryByText('All Users')).not.toBeDefined();
      expect(queryByText('All Projects')).not.toBeDefined();
      expect(queryByText('Admin Resources')).not.toBeDefined();
      expect(container).toMatchSnapshot();
    });

    it('should show the login button', () => {
      const { getByText, container } = mountWithContext(
        <Header isAuthenticated={false} />,
        {
          routes: ['/']
        }
      );

      expect(getByText('Log In')).toBeDefined();
      expect(container).toMatchSnapshot();
    });
  });
});
