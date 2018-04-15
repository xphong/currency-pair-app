import axios from 'axios';

import * as types from './types';

export const requestQuote = () => {
  return {
    type: types.REQUEST_QUOTE
  };
}

export const receiveQuote = data => {
  return {
    type: types.RECEIVE_QUOTE,
    payload: {
      data
    }
  };
}

export const receiveError = error => {
  return {
    type: types.QUOTE_ERROR,
    payload: {
      error
    }
  };
}

export const fetchBitcoinQuote = () => {
  const url = 'https://api.bitfinex.com/v1/pubticker/btcusd';
  const opts = {
    url,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };

  return async dispatch => {
    dispatch(requestQuote());

    try {
      const { data } = await axios(opts);

      dispatch(receiveQuote(Number(data.last_price)));
    } catch (e) {
      dispatch(receiveError(e));
    }
  };
}
