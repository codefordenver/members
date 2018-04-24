import './testShims';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as getEnvironmentVariableModule from './utils/getEnvironmentVariables';

configure({ adapter: new Adapter() });

getEnvironmentVariableModule.default = jest.fn().mockReturnValue({
  auth0ClientId: '',
  auth0Domain: '',
  graphcoolApi: ''
});
