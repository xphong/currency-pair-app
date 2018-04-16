import configureMockStore from 'configureMockStore';

import * as types from './types';
import * as walletActions from './wallet';

const store = configureMockStore({
  wallet: {
    balance: {
      USD: 1000,
      BTC: 0
    }
  }
});

describe('Wallet Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('trade', () => {
    it('should succesfully perform a trade', async done => {
      await store.dispatch(walletActions.trade(500, 1))
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: types.REQUEST_TRADE });
      expect(actions[1]).toEqual({
        type: types.RECEIVE_TRADE,
        payload: {
          balance: {
            BTC: 1,
            USD: 500
          }
        }
      });

      done();
    });

    it('should dispatch an error when missing trade amount', async done => {
      await store.dispatch(walletActions.trade())
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: types.TRADE_ERROR,
        payload: {
          error: 'Please enter a trade amount.'
        }
      });

      done();
    });

    it('should dispatch an error when trade amount is more than balance', async done => {
      await store.dispatch(walletActions.trade(1001, 1))
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: types.TRADE_ERROR,
        payload: {
          error: 'You have insufficient funds in your account.'
        }
      });

      done();
    });
  });
});