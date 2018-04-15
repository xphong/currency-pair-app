import * as types from '../actions/types';
import quotesReducer from './quotes';

describe('Quotes Reducer', () => {
  it('should return initial state', () => {
    const reducer = quotesReducer(undefined, {});

    expect(reducer).toMatchSnapshot();
  });

  it('should handle REQUEST_QUOTE', () => {
    const action = {
      type: types.REQUEST_QUOTE
    };

    const reducer = quotesReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle QUOTE_ERROR', () => {
    const action = {
      type: types.QUOTE_ERROR,
      payload: {
        data: {}
      }
    };

    const reducer = quotesReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_QUOTE', () => {
    const action = {
      type: types.RECEIVE_QUOTE,
      payload: {
        data: '8288.9'
      }
    };

    const reducer = quotesReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });
});
