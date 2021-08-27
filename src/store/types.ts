import { User } from "./user/types";

type Action = {
  type: string;
};

type RootState = {
  user: User;
};

export type { Action, RootState };
