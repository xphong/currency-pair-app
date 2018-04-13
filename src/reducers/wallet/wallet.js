import * as types from '../../actions/wallet/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  balance: {
    USD: 156.12,
    BTC: 0
  }
};

const wallet = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case types.REQUEST_TRADE:
      return Object.assign({}, state, { isLoading: true, error: false });
    case types.TRADE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        balance: action.payload.balance,
        error: true
      });
    case types.COMPLETE_TRADE:
      return Object.assign({}, state, {
        isLoading: false,
        balance: action.payload.balance,
        error: false
      });
    default:
      return state;
  }
}

export default wallet;
