import { GET_USER } from '../authenticated/member/MyProfilePage';
import { GET_USER_ROLE } from '../authenticated/loggedInRoutes';
import { adminUserId, regularUserId } from '../testData';

const name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User';

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
          id: adminUserId,
          name,
          picture,
          email,
          flowdockName,
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
          id: regularUserId,
          name,
          picture,
          email,
          flowdockName,
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
          id: adminUserId,
          role: 'ADMIN'
        }
      }
    }
  }
];
