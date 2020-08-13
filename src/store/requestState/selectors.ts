import { createSelector, OutputSelector } from "reselect";
import { CombinedState } from "../combinedReducers";
import {
  LoadingReducerState,
  SuccessReducerState,
  ErrorReducerState,
} from "./reducers";

export const loadingReducer = (state: CombinedState): LoadingReducerState =>
  state.loading;
export const successReducer = (state: CombinedState): SuccessReducerState =>
  state.success;
export const errorReducer = (state: CombinedState): ErrorReducerState =>
  state.error;

export const isLoading = (
  actions: string[]
): OutputSelector<
  CombinedState,
  boolean,
  (res: LoadingReducerState) => boolean
> => {
  return createSelector(loadingReducer, (loading) => {
    // returns true only when all actions is not loading
    return actions.some((actionName) => loading[actionName]);
  });
};

export const isSuccessful = (
  actions: string[]
): OutputSelector<
  CombinedState,
  boolean,
  (res: SuccessReducerState) => boolean
> => {
  return createSelector(successReducer, (success) => {
    // returns true only when all actions are success
    return actions.every((actionName) => success[actionName]);
  });
};

export const getError = (
  actions: string[]
): OutputSelector<
  CombinedState,
  string | undefined,
  (res: ErrorReducerState) => string | undefined
> => {
  // returns the first error messages for actions
  // * We assume when any request fails on a page that
  //   requires multiple API calls, we shows the first error
  return createSelector(errorReducer, (error) => {
    return actions.map((actionName) => error[actionName])[0];
  });
};
