import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/slice';
import {desksReducer} from './desks/reducer';
import {tasksReducer} from './tasks/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  desks: desksReducer,
  tasks: tasksReducer,
});

export {rootReducer};
