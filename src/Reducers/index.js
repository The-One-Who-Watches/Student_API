import countReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: countReducer,
  logged: loggedReducer,
});

export default allReducers;
