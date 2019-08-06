import { GET_USER_COMMON } from '../utils/commonGraphql';
import { adminUserId, regularUserId } from '../testData';
import {
  GetUserCommonQueryVariables,
  UserCommonFragment,
  UserRole
} from '../generated-models';

const name = 'Test User',
  picture = '<empty>',
  email = 'test-user@nonexistent.com',
  flowdockName = 'TestUser',
  githubName = '@testUser',
  description = 'Test User',
  createdAt = 'Sat Jul 13 2019 11:31:23 GMT-0600 (Mountain Daylight Time)';

function getUserCommonResponse(
  userOverrides?: Partial<UserCommonFragment>,
  variableOverrides?: Partial<GetUserCommonQueryVariables>
) {
  return {
    request: {
      query: GET_USER_COMMON,
      variables: {
        id: adminUserId,
        ...variableOverrides
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
          role: UserRole.Admin,
          skills: [],
          projectsChampioned: [],
          ...userOverrides
        }
      }
    }
  };
}

export const adminUserServerMockResponses = [
  getUserCommonResponse(
    { role: UserRole.Admin, id: adminUserId },
    {
      id: adminUserId
    }
  )
];

export const regularUserMockResponses = [
  getUserCommonResponse(
    { role: UserRole.Regular, id: regularUserId },
    {
      id: regularUserId
    }
  )
];
