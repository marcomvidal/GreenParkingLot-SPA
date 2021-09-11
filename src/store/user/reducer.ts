import { UserActions } from './actions';
import { User, UserAction } from './types';

const initialState: User = {
  isLoggedIn: false,
  email: 'guest@email.com',
  name: 'Guest',
  baseTax: 0,
};

const userReducer = (state: User = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActions.LOGIN:
      return { ...action.payload?.user, isLoggedIn: true } ?? state;
    case UserActions.LOGOUT:
    default:
      return initialState;
  }
};

export default userReducer;
