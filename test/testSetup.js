import 'jest-enzyme';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '../src/polyfills';

Enzyme.configure({ adapter: new Adapter() });
