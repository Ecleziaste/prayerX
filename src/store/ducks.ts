import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/slice';
import {reducer as desksReducer} from './desks/slice';
import {tasksReducer} from './tasks/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  desks: desksReducer,
  tasks: tasksReducer,
});

export {rootReducer};
