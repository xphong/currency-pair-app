import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function configureStore( initialState = {}) {
  const middleware = [thunk];

  let enhancer = applyMiddleware(...middleware);

  if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(enhancer);
  }

  return createStore(rootReducer, initialState, enhancer);
}
