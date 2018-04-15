import React from 'react';

import { WalletContainer, mapStateToProps } from './Wallet';

describe('Wallet Container', () => {
  it('should render Wallet', () => {
    const props = {
      balance: {
        USD: 1,
        BTC: 0
      }
    };
    const wrapper = shallow(<WalletContainer {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  // In practice, trivial mapStateToProps are probably not worth testing
  it('mapStateToProps()', () => {
    const wallet = {
      balance: {
        USD: 9000,
        BTC: 0
      }
    };
    const state = {
      wallet
    };

    const expectedProps = {
      balance: wallet.balance,
    };

    const props = mapStateToProps(state);

    expect(props).toMatchObject(expectedProps);
  });
});
