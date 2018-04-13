import React from 'react';

import Balance from './Balance';

describe('Balance Component', () => {
  it('should render account balance', () => {
    const props = {
      balance: {
        USD: 1,
        BTC: 0
      }
    }
    const wrapper = shallow(<Balance {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render error message if no balance found', () => {
    const wrapper = shallow(<Balance />);

    expect(wrapper).toMatchSnapshot();
  });
});
