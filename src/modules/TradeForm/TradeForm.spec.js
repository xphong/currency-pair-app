import React from 'react';

import {
  TradeFormContainer,
  mapStateToProps,
  mapDispatchToProps
} from './TradeForm';

const props = {
  quote: 1337,
  tradeError: false,
  tradeSuccess: false,
  tradeLoading: false,
  fetchBitcoinQuote: jest.fn(),
  trade: jest.fn()
};

describe('TradeForm Container', () => {
  it('should render TradeForm', () => {
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

    const mockProps = mapStateToProps(state);

    expect(mockProps).toMatchObject(expectedProps);
  });

  // In practice, mapDispatchToProps() is probably not worth testing, as it
  // usually only calls bindActionCreators() which is tested in redux
  it('mapDispatchToProps()', () => {
    const dispatch = jest.fn();
    const mockProps = mapDispatchToProps(dispatch);
    const expectedProps = {
      fetchBitcoinQuote: jest.fn(),
      trade: jest.fn(),
    }

    expect(Object.keys(mockProps)).toMatchObject(Object.keys(expectedProps));
  });

  it('should perform a trade', () => {
    const wrapper = shallow(<TradeFormContainer {...props} />);
    const value = 10;

    wrapper.find('Input[name="amount"]').simulate('change', {
      target: {
        value
      },
    });

    wrapper.find('Button').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  describe('calculateQuote', () => {
    it('should calculate quote amount', () => {
      const wrapper = shallow(<TradeFormContainer {...props} />);

      expect(wrapper.instance().calculateQuote(10, 10)).toEqual(1);
      expect(wrapper.instance().calculateQuote(5, 10)).toEqual(0.5);
    });
  });

  describe('handlePriceChange', () => {
    it('should update amount and quoteAmount state', () => {
      const wrapper = shallow(<TradeFormContainer {...props} />);
      const value = 1337;

      wrapper.instance().handlePriceChange({
        target: {
          value
        }
      });

      expect(wrapper.state().amount).toEqual(value);
      expect(wrapper.state().quoteAmount).toEqual(1);
    });
  });

  describe('handleSubmit', () => {
    it('should call trade', () => {
      const wrapper = shallow(<TradeFormContainer {...props} />);

      wrapper.state().amount = 1337;
      wrapper.state().quoteAmount = 1;

      jest.spyOn(wrapper.instance().props, 'trade');

      wrapper.instance().handleSubmit({
        preventDefault: jest.fn()
      });

      expect(wrapper.instance().props.trade).toHaveBeenCalledWith(1337, 1);
    });
  });
});
