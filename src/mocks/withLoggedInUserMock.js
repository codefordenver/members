import { getLoggedInUser } from '../utils/withLoggedInUser';
import gql from 'graphql-tag';

const userId = 'mocked-test-user-id',
  name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User',
  role = 'ADMIN';

export default {
  request: {
    query: getLoggedInUser,
    variables: {
      id: userId
    }
  },
  result: {
    data: {
      user: {
        id: userId,
        name,
        picture,
        email,
        flowdockName,
        githubName,
        description,
        role
      }
    }
  }
};
