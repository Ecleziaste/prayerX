import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/slice';
import {reducer as desksReducer} from './columns/slice';
import {reducer as tasksReducer} from './cards/slice';

const rootReducer = combineReducers({
  user: userReducer,
  columns: desksReducer,
  cards: tasksReducer,
});

export {rootReducer};
