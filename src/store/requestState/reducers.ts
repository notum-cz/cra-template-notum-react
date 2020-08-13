import { on } from "ts-action-immer";
import { reducer } from "ts-action";
import { ActionTypes } from "../actionTypes";
import { setRequestState, clearRequestState } from "./actions";
import { RequestState } from "../../helpers/enums/RequestState";

export const initialState = {};

const clearStates = (
  state: ErrorReducerState | LoadingReducerState | SuccessReducerState,
  actionTypes: ActionTypes[]
): void => {
  actionTypes.forEach((type) => {
    if (type in state) {
      delete state[type];
    }
  });
};

export interface LoadingReducerState {
  [key: string]: boolean;
}
export const loadingReducer = reducer<LoadingReducerState>(
  initialState,
  on(
    setRequestState,
    (state: LoadingReducerState, { payload: { actionType, requestState } }) => {
      // Store whether a request is happening at the moment or not
      // e.g. will be true when receiving LOADING
      //      and false when receiving SUCCESS / FAILURE
      state[actionType] = requestState === RequestState.Loading;
    }
  ),
  on(clearRequestState, (state: LoadingReducerState, { payload }) => {
    clearStates(state, payload);
  })
);

export interface SuccessReducerState {
  [key: string]: boolean;
}
export const successReducer = reducer<SuccessReducerState>(
  initialState,
  on(
    setRequestState,
    (state: SuccessReducerState, { payload: { actionType, requestState } }) => {
      // Store whether a request was successfully resulted or not
      // e.g. will be true when receiving SUCCESS
      //      and false when receiving LOADING / FAILURE
      state[actionType] = requestState === RequestState.Success;
    }
  ),
  on(clearRequestState, (state: SuccessReducerState, { payload }) => {
    clearStates(state, payload);
  })
);

export interface ErrorReducerState {
  [key: string]: string | undefined;
}
export const errorReducer = reducer<ErrorReducerState>(
  initialState,
  on(
    setRequestState,
    (
      state: ErrorReducerState,
      { payload: { actionType, requestState, message } }
    ) => {
      // Store errorMessage
      // e.g. stores errorMessage when receiving FAILURE
      //      else clear errorMessage when receiving LOADING
      state[actionType] =
        requestState === RequestState.Failure ? message : undefined;
    }
  ),
  on(clearRequestState, (state: ErrorReducerState, { payload }) => {
    clearStates(state, payload);
  })
);
