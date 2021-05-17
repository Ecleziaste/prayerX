import {combineReducers} from 'redux';
import {userReducer} from './user';
import {columnsReducer} from './columns';
import {cardsReducer} from './cards';

const rootReducer = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});

export {rootReducer};
