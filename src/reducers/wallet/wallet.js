import * as types from '../../actions/wallet/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  balance: {
    dollar: 156.12,
    bitcoin: 0
  }
};

const wallet = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case types.REQUEST_TRADE:
      return Object.assign({}, state, { isLoading: true, error: false });
    case types.TRADE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload.data,
        error: true
      });
    case types.COMPLETE_TRADE:
      return Object.assign({}, state, {
        isLoading: false,
        balance: action.payload.data,
        error: false
      });
    default:
      return state;
  }
}

export default wallet;
