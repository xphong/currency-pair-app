import React from 'react';

import { WalletContainer } from './Wallet';

describe('Wallet Container', () => {
  it('should render Wallet', () => {
    const props = {
      balance: {
        USD: 1,
        BTC: 0
      }
    }
    const wrapper = shallow(<WalletContainer {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
