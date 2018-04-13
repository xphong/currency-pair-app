import React from 'react';

import Button from './Button';

describe('Button Component', () => {
  it('should render Button', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Button with handleOnClick', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button handleClick={handleClick}>It's over 9000!!</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
