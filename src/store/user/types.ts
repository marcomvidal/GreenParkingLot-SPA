import { Action } from "store/types";

type User = {
  username: string;
  isloggedIn: boolean;
};

type UserPayload = {
  username: string;
};

type UserAction = Action & {
  payload?: UserPayload;
};

export type { User, UserAction, UserPayload };
