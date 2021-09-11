import { UserPayload } from './types';

enum UserActions {
  LOGIN = 'user/sign-in',
  LOGOUT = 'user/sign-out',
}

const signInAction = (payload: UserPayload) => ({
  type: UserActions.LOGIN,
  payload,
});

const signOutAction = () => ({ type: UserActions.LOGOUT });

export { UserActions, signInAction, signOutAction };
