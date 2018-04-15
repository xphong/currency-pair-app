import * as types from '../../actions/wallet/types';
import walletReducer from './wallet';

describe('Wallet Reducer', () => {
  it('should return initial state', () => {
    const reducer = walletReducer(undefined, {});

    expect(reducer).toMatchSnapshot();
  });

  it('should handle REQUEST_TRADE', () => {
    const action = {
      type: types.REQUEST_TRADE
    };

    const reducer = walletReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle TRADE_ERROR', () => {
    const action = {
      type: types.TRADE_ERROR,
      payload: {
        error: 'Insuccifient funds'
      }
    };

    const reducer = walletReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_TRADE', () => {
    const action = {
      type: types.RECEIVE_TRADE,
      payload: {
        balance: {
          USD: 50,
          BTC: 0.9000
        }
      }
    };

    const reducer = walletReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });
});
