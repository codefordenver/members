import { GetUserDocument } from '../generated-models';
import { adminUserId, regularUserId } from '../testData';
import { getUserProfile } from '../header/Header';

const name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User';

export const adminUserServerMockResponses = [
  {
    request: {
      query: GetUserDocument,
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
  },
  {
    request: {
      query: getUserProfile,
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
          role: 'ADMIN'
        }
      }
    }
  }
];

export const regularUserMockResponses = [
  {
    request: {
      query: GetUserDocument,
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
  },
  {
    request: {
      query: getUserProfile,
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
          role: 'USER'
        }
      }
    }
  }
];
