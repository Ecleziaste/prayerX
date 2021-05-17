import {AnyAction, Dispatch} from 'redux';
import {REHYDRATE} from 'redux-persist';
import {http} from '../services/http';
import {signUp, signIn} from '../store/user/actions';

export const authMiddleware = () => (next: Dispatch) => (
  action: AnyAction,
): AnyAction => {
  if (action.type === signUp.fulfilled.type) {
    action.payload?.token && http.setAuthorizationHeader(action.payload.token);
  }
  if (action.type === signIn.fulfilled.type) {
    action.payload?.token && http.setAuthorizationHeader(action.payload.token);
  }
  if (action.type === REHYDRATE) {
    action.payload?.user?.token &&
      http.setAuthorizationHeader(action.payload.user.token);
  }

  return next(action);
};
