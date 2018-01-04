import React from 'react';
import {shallow} from 'enzyme';

import ScriptList from '../ScriptList';

describe('<ScriptList />', () => {
  test('empty', () => {
    const list = shallow(<ScriptList scripts={[]} />);
    expect(list).toMatchSnapshot();
  });

  test('with scripts', () => {
    const scripts = [
      {name: 'test', command: 'jest'},
      {name: 'lint', command: 'eslint .'},
    ];
    const list = shallow(<ScriptList scripts={scripts} />);
    expect(list).toMatchSnapshot();
  });
});
