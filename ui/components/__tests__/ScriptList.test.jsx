import React from 'react';
import { shallow } from 'enzyme';

import ScriptList from '../ScriptList';

describe('<ScriptList />', () => {
  test('matches snapshot', () => {
    const list = shallow(<ScriptList scripts={[]} />);
    expect(list).toMatchSnapshot();
  });
});
