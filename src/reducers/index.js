import { combineReducers } from 'redux';

import wallet from '../modules/Wallet/reducers/wallet';
import quotes from '../modules/TradeForm/reducers/quotes';

const rootReducer = combineReducers({
  wallet,
  quotes
});

export default rootReducer;
