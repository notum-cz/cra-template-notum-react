import { combineReducers } from "redux";
import * as general from "./general/reducers";

export interface CombinedState {
  general: general.State;
}

export const initialState: CombinedState = {
  general: general.initialState,
};

export const reducer = combineReducers<CombinedState>({
  general: general.generalReducer,
});
