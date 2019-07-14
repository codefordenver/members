import { GET_USER } from '../authenticated/member/MyProfilePage';
import { GET_USER_ROLE } from '../authenticated/LoggedInRoutes';
import { adminUserId, regularUserId } from '../testData';

const name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User',
  createdAt = 'Sat Jul 13 2019 11:31:23 GMT-0600 (Mountain Daylight Time)';

export const adminUserServerMockResponses = [
  {
    request: {
      query: GET_USER,
      variables: {
        id: adminUserId
      }
    },
    result: {
      data: {
        user: {
          __typename: 'USER',
          id: adminUserId,
          createdAt,
          name,
          picture,
          email,
          flowdockName,
          hasCompletedWizard: true,
          githubName,
          description,
          role: 'ADMIN',
          skills: [],
          projectsChampioned: []
        }
      }
    }
  }
];

export const regularUserMockResponses = [
  {
    request: {
      query: GET_USER,
      variables: {
        id: regularUserId
      }
    },
    result: {
      data: {
        user: {
          __typename: 'USER',
          id: regularUserId,
          createdAt,
          name,
          picture,
          email,
          flowdockName,
          hasCompletedWizard: true,
          githubName,
          description,
          role: 'USER',
          skills: [],
          projectsChampioned: []
        }
      }
    }
  }
];

export const roleMockResponses = [
  {
    request: {
      query: GET_USER_ROLE,
      variables: { id: regularUserId }
    },
    result: {
      data: {
        user: {
          __typename: 'USER',
          id: regularUserId,
          role: 'REGULAR'
        }
      }
    }
  },
  {
    request: {
      query: GET_USER_ROLE,
      variables: { id: adminUserId }
    },
    result: {
      data: {
        user: {
          __typename: 'USER',
          id: adminUserId,
          role: 'ADMIN'
        }
      }
    }
  }
];
