import { combineReducers } from 'redux';
import MerchantsReducer from './reducers-merchants';

const rootReducer = combineReducers({
  merchantsState: MerchantsReducer
});

export default rootReducer;
