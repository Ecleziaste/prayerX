import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';
import {desksReducer} from './desks/reducer';
import {tasksReducer} from './tasks/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  desks: desksReducer,
  tasks: tasksReducer,
});

export {rootReducer};
