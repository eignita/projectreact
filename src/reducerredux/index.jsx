import { counterreducer } from "./counterreducer";
import { loggedreducer } from "./loggedreducer";

import { combineReducers } from "redux";

export const allReducers = combineReducers({
    counterreducer,
    loggedreducer
});
