import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { reducer } from "./combinedReducers";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
