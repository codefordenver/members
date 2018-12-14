import React from 'react';
import { waitForElement } from 'react-testing-library';

import Header from '../Header';
import { mountWithAuth, mountWithContext } from '../../testUtils';
import {
  mockAdminUser,
  mockRegularUser,
  mockUnauthenticated
} from '../../mocks/localStorageMock';
import { adminUserServerMockResponses } from '../../mocks/withLoggedInUserMock';

describe('Header', () => {
  describe('if the user is logged in and is not an admin', () => {
    beforeAll(mockRegularUser);

    it('should not show the login button', () => {
      const { queryByText } = mountWithAuth(<Header />);
      expect(queryByText('Log In')).toBeNull();
    });

    it("should show just the 'all users' and 'all projects' links", async () => {
      const { getByText, queryByText } = mountWithAuth(<Header />);

      await waitForElement(() => getByText('All Users'));

      expect(getByText('All Users')).toBeDefined();
      expect(getByText('All Projects')).toBeDefined();
      expect(queryByText('Admin Resources')).toBeNull();
    });
  });

  describe('if the user is logged in and is an admin', () => {
    beforeAll(mockAdminUser);

    it('should show the admin resources link', async () => {
      const { getByText } = mountWithAuth(
        <Header />,
        {
          routes: ['/']
        },
        adminUserServerMockResponses
      );

      await waitForElement(() => getByText('Admin Resources'));

      expect(getByText('All Users')).toBeDefined();
      expect(getByText('All Projects')).toBeDefined();
      expect(getByText('Admin Resources')).toBeDefined();
    });
  });

  describe('if the user is not logged in', () => {
    beforeAll(mockUnauthenticated);

    it('not should show any navigation links', async () => {
      const { queryByText, getByText } = mountWithContext(<Header />, {
        routes: ['/']
      });

      await waitForElement(() => getByText('Log In'));

      expect(queryByText('All Users')).toBeNull();
      expect(queryByText('All Projects')).toBeNull();
      expect(queryByText('Admin Resources')).toBeNull();
    });

    it('should show the login button', async () => {
      const { getByText } = mountWithContext(<Header />, {
        routes: ['/']
      });

      await waitForElement(() => getByText('Log In'));
    });
  });
});
