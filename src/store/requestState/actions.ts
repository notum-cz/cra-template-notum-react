import { action, payload } from "ts-action";
import { ActionTypes } from "../actionTypes";
import { RequestState } from "../../helpers/enums/RequestState";

export const setRequestState = action(
  ActionTypes.SET_REQUEST_STATE,
  payload<{
    requestState: RequestState;
    actionType: ActionTypes;
    message?: string;
  }>()
);

export const clearRequestState = action(
  ActionTypes.CLEAR_REQUEST_STATE,
  payload<ActionTypes[]>()
);
