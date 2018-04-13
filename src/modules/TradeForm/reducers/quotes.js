import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  bitcoin: 0
};

const quotes = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case types.REQUEST_QUOTE:
      return Object.assign({}, state, { isLoading: true, error: false });
    case types.QUOTE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        bitcoin: action.payload.data,
        error: true
      });
    case types.RECEIVE_QUOTE:
      return Object.assign({}, state, {
        isLoading: false,
        bitcoin: action.payload.data,
        error: false
      });
    default:
      return state;
  }
}

export default quotes;
