import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./samples";
import loading from "./loadings";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
