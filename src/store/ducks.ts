import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/slice';
import {reducer as columnsReducer} from './columns/slice';
import {reducer as cardsReducer} from './cards/slice';

const rootReducer = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});

export {rootReducer};
