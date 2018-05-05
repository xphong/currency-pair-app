import * as types from 'modules/Wallet/actions/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  success: false,
  balance: {
    USD: 156.12,
    BTC: 0
  }
};

const wallet = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case types.REQUEST_TRADE:
      return Object.assign({}, state, { isLoading: true, error: false, success: false });
    case types.TRADE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.error,
        success: false
      });
    case types.RECEIVE_TRADE:
      return Object.assign({}, state, {
        isLoading: false,
        balance: action.payload.balance,
        error: false,
        success: true
      });
    default:
      return state;
  }
}

export default wallet;
