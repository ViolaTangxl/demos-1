import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
// 引入redux-promise中间件
import promiseMiddleware from "redux-promise";

let store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;