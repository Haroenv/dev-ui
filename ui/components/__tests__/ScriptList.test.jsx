import React from 'react';
import {shallow} from 'enzyme';

import ScriptList from '../ScriptList';
import Section from '../Section';

describe('<ScriptList />', () => {
  test('empty', () => {
    const wrapper = shallow(<ScriptList scripts={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with scripts', () => {
    const scripts = [
      {name: 'test', command: 'jest'},
      {name: 'lint', command: 'eslint .'},
    ];
    const wrapper = shallow(<ScriptList scripts={scripts} />);

    expect(wrapper.find(Section)).toHaveLength(2);
    expect(wrapper.find(Section).first()).toHaveStyleRule('margin', '0.5em');

    expect(wrapper).toMatchSnapshot();
  });
});
