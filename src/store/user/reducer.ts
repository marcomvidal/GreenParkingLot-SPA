import { UserActions } from "./actions";
import { User, UserAction } from "./types";

const initialState: User = { username: "Guest", isloggedIn: false };

const userReducer = (state: User = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActions.LOGIN:
      return { isloggedIn: true, username: action.payload?.username };
    case UserActions.LOGOUT:
      return initialState;
    default:
      return initialState;
  }
};

export default userReducer;
