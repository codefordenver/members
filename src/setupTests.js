import * as getEnvironmentVariableModule from './utils/getEnvironmentVariables';

getEnvironmentVariableModule.default = jest.fn().mockReturnValue({
  auth0ClientId: '',
  auth0Domain: '',
  graphcoolApi: ''
});
