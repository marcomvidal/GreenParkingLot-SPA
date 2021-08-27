import { UserPayload } from "./types";

enum UserActions {
  LOGIN = "user/login",
  LOGOUT = "user/logout",
}

const loginAction = (payload: UserPayload) => ({
  type: UserActions.LOGIN,
  payload,
});

export { UserActions, loginAction };
