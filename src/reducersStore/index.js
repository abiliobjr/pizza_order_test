import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import homeReducer from '../pages/home/reducer';
const reducers = combineReducers({
  homeReducer
});


export default function configureStore() {
  return createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(),
    )
  );
 }