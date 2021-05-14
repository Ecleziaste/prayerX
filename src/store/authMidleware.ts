import {AnyAction, Dispatch} from 'redux';
import {REHYDRATE} from 'redux-persist';
import {http} from '../services/http';
import {signUp} from '../store/user/actions';
// import {actions} from './ducks';

export const authMiddleware = () => (next: Dispatch) => (
  action: AnyAction,
): AnyAction => {
  if (action.type === signUp.fulfilled.type) {
    action.payload?.token && http.setAuthorizationHeader(action.payload.token);
  }
  if (action.type === REHYDRATE) {
    action.payload?.user?.token &&
      http.setAuthorizationHeader(action.payload.auth.token);
  }
  //   if (action.type === actions.auth.signOut.fulfilled.type) {
  //     http.unsetAuthorizationHeader();
  //   }
  return next(action);
};
