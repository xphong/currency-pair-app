import configureMockStore from 'configureMockStore';
import moxios from 'moxios';

import * as types from './types';
import * as quotesActions from './quotes';

const store = configureMockStore();

describe('Quotes Actions', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('fetchBitcoinQuote', () => {
    it('should succesfully fetch bitcoin quote price', async done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            last_price: 9000
          }
        });
      });

      await store.dispatch(quotesActions.fetchBitcoinQuote())
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: types.REQUEST_QUOTE });
      expect(actions[1]).toEqual({
        type: types.RECEIVE_QUOTE,
        payload: {
          data: 9000
        }
      });

      done();
    });

    it('should dispatch an error when API returns error', async done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400
        });
      });

      await store.dispatch(quotesActions.fetchBitcoinQuote())
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: types.REQUEST_QUOTE });
      expect(actions[1]).toEqual({
        type: types.QUOTE_ERROR,
        payload: {
          error: new Error('Request failed with status code 400')
        }
      });

      done();
    });
  });
});
