import {combineReducers} from 'redux';
import {userReducer} from './user';
import {columnsReducer} from './columns';
import {cardsReducer} from './cards';
import {commentsReducer} from './comments';

const rootReducer = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
});

export {rootReducer};
