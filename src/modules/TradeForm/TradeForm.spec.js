import React from 'react';

import {
  TradeFormContainer,
  mapStateToProps,
  mapDispatchToProps
} from './TradeForm';

describe('TradeForm Container', () => {
  it('should render TradeForm', () => {
    const props = {
      quote: 1337,
      fetchBitcoinQuote: jest.fn()
    };
    const wrapper = shallow(<TradeFormContainer {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  // In practice, trivial mapStateToProps are probably not worth testing
  it('mapStateToProps()', () => {
    const quotes = {
      bitcoin: 1337
    };

    const wallet = {
      error: false,
      success: false,
      isLoading: false
    }

    const state = {
      quotes,
      wallet
    };

    const expectedProps = {
      quote: quotes.bitcoin,
      tradeError: wallet.error,
      tradeSuccess: wallet.success,
      tradeLoading: wallet.isLoading
    };

    const props = mapStateToProps(state);

    expect(props).toMatchObject(expectedProps);
  });
});

// In practice, mapDispatchToProps() is probably not worth testing, as it
// usually only calls bindActionCreators() which is tested in redux
it('mapDispatchToProps()', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch);
  const expectedProps = {
    fetchBitcoinQuote: jest.fn(),
    trade: jest.fn(),
  }

  expect(Object.keys(props)).toMatchObject(Object.keys(expectedProps));
});

