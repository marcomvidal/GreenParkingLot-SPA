import { Action } from 'store/types';

type User = {
  isLoggedIn: boolean;
  name: string;
  email: string;
};

type UserPayload = {
  user: Partial<User>;
};

type UserAction = Action & {
  payload?: UserPayload;
};

export type { User, UserAction, UserPayload };
