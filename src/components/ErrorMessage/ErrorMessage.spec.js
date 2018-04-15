import React from 'react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  it('should render ErrorMessage', () => {
    const wrapper = shallow(<ErrorMessage>error</ErrorMessage>);

    expect(wrapper).toMatchSnapshot();
  });
});
