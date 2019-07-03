// @testing-library/react renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

import * as getEnvironmentVariableModule from './utils/getEnvironmentVariables';

jest.spyOn(getEnvironmentVariableModule, 'default').mockReturnValue({
  auth0ClientId: '',
  auth0Domain: '',
  graphcoolApi: ''
});
