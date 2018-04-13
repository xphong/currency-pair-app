import React from 'react';

import TextInput from './TextInput';

describe('TextInput Component', () => {
  it('should render TextInput', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextInput with props', () => {
    const props = {
      value: 'Goku',
      name: 'Kakarot'
    }
    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
