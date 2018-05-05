import * as types from './types';

import delay from 'utils/delay/delay';

export const requestTrade = () => {
  return {
    type: types.REQUEST_TRADE
  };
}

export const receiveTrade = balance => {
  return {
    type: types.RECEIVE_TRADE,
    payload: {
      balance
    }
  };
}

export const receiveError = error => {
  return {
    type: types.TRADE_ERROR,
    payload: {
      error
    }
  };
}

export const trade = (amount, quoteAmount) => {
  return async (dispatch, getState) => {
    const { wallet } = getState();
    const usdBalance = wallet.balance.USD;
    const btcBalance = wallet.balance.BTC;

    if (!amount || !quoteAmount) {
      dispatch(receiveError('Please enter a trade amount.'));
      return;
    }

    if (amount > usdBalance) {
      dispatch(receiveError('You have insufficient funds in your account.'));
      return;
    }

    dispatch(requestTrade());

    try {
      // Fake a delay. In a real-world application, trade would make a POST call
      await delay(1000);

      const balance = {
        USD: usdBalance - amount,
        BTC: btcBalance + quoteAmount
      };

      dispatch(receiveTrade(balance));
    } catch (e) {
      dispatch(receiveError(e.message));
    }
  };
}
