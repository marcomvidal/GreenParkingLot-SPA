import User from 'models/User';
import { Action } from 'store/types';

type UserPayload = {
  user: Partial<User>;
};

type UserAction = Action & {
  payload?: UserPayload;
};

export type { User, UserAction, UserPayload };
