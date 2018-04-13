import React from 'react';

import Input from './Input';

describe('Input Component', () => {
  it('should render Input', () => {
    const wrapper = shallow(<Input type="text" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Input with props', () => {
    const props = {
      value: 'Goku',
      name: 'Kakarot'
    }
    const wrapper = shallow(<Input type="text" {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Input with type number', () => {
    const wrapper = shallow(<Input type="number" />);

    expect(wrapper).toMatchSnapshot();
  });
});
