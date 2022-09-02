import { combineReducers } from "redux";

import matchsReducer from "./matchs";
import scoreReducer from "./score";
import viewRulesReducer from "./viewRules";

export default combineReducers({
  matchs: matchsReducer,
  score: scoreReducer,
  stateRules: viewRulesReducer,
});
