import { combineReducers } from "redux";
import * as general from "./general/reducers";
import * as request from "./requestState/reducers";

export interface CombinedState {
  general: general.State;
  loading: request.LoadingReducerState;
  error: request.ErrorReducerState;
  success: request.SuccessReducerState;
}

export const initialState: CombinedState = {
  general: general.initialState,
  loading: request.initialState,
  error: request.initialState,
  success: request.initialState,
};

export const reducer = combineReducers<CombinedState>({
  general: general.generalReducer,
  loading: request.loadingReducer,
  error: request.errorReducer,
  success: request.successReducer,
});
