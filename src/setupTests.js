import './testShims';
import * as getEnvironmentVariableModule from './utils/getEnvironmentVariables';
import * as withLoggedInUser from './utils/withLoggedInUser';

getEnvironmentVariableModule.default = jest.fn().mockReturnValue({
  auth0ClientId: '',
  auth0Domain: '',
  graphcoolApi: ''
});

withLoggedInUser.isAuthenticated = jest.fn().mockReturnValue(true);
withLoggedInUser.getAuthSession = jest.fn().mockReturnValue({
  userId: 'mocked-test-user-id;'
});
