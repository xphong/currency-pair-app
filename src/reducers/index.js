import { combineReducers } from 'redux';

import wallet from './wallet/wallet';
import quotes from '../modules/TradeForm/reducers/quotes';

const rootReducer = combineReducers({
  wallet,
  quotes
});

export default rootReducer;
