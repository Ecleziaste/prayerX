import {combineReducers} from 'redux';
import {desksReducer} from './desks/reducer';

const rootReducer = combineReducers({
  desks: desksReducer,
  
});

export {rootReducer};
