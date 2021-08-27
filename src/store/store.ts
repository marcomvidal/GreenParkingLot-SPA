import user from "./user/reducer";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ user }));

export default store;
