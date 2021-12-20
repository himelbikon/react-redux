import { combineReducers } from "redux";

import counter_reducer from "./counter";
import logged_reducer from "./is_logged";

const reducers = combineReducers({
  counter: counter_reducer,
  is_logged: logged_reducer,
});

export default reducers;
