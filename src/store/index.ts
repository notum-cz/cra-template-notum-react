import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import * as Sentry from "@sentry/react";
import { reducer } from "./combinedReducers";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options listed below
});

const store = createStore(
  reducer,
  compose(applyMiddleware(logger, thunk), sentryReduxEnhancer)
);

export default store;
