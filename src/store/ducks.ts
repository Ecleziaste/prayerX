import {combineReducers} from 'redux';
import {desksReducer} from './desks/reducer';
import {userReducer} from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  desks: desksReducer,
});

export {rootReducer};
