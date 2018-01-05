import React from 'react';
import { shallow } from 'enzyme';

import ScriptList from '../ScriptList';
import { ListItem } from '../List';

describe('<ScriptList />', () => {
  test('empty', () => {
    const wrapper = shallow(<ScriptList scripts={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with scripts', () => {
    const scripts = [
      { name: 'test', command: 'jest' },
      { name: 'lint', command: 'eslint .' },
    ];
    const wrapper = shallow(<ScriptList scripts={scripts} />);

    expect(wrapper.find(ListItem)).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });
});
