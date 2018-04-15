import React from 'react';

import SuccessMessage from './SuccessMessage';

describe('SuccessMessage Component', () => {
  it('should render SuccessMessage', () => {
    const wrapper = shallow(<SuccessMessage>success</SuccessMessage>);

    expect(wrapper).toMatchSnapshot();
  });
});
