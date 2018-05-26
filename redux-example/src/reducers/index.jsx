import { combineReducers } from "redux";
import oneReducer from "./oneReducer";
import twoReducer from "./twoReducer";

const allReducers = {
    oneReducer: oneReducer,
    twoReducer: twoReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;