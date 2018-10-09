import { getLoggedInUser } from '../utils/withLoggedInUser';
import { adminUserId, regularUserId } from '../testData';

const name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User';

export const adminUserServerResponseMock = {
  request: {
    query: getLoggedInUser,
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
        role: 'ADMIN'
      }
    }
  }
};

export default [
  {
    request: {
      query: getLoggedInUser,
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
          role: 'USER'
        }
      }
    }
  }
];
