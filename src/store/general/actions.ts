import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { State } from "./reducers";
import { makeServerCallAsync } from "../../helpers/functions/http";
import { baseAsyncRequest } from "../../helpers/functions/baseAsyncRequest";
import { ActionTypes } from "../actionTypes";

export const performExampleFetch: ActionCreator<ThunkAction<
  Promise<void>,
  State,
  any,
  any
>> = () => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    const request = async () => {
      return makeServerCallAsync("get", `/todos`);
    };

    await baseAsyncRequest(ActionTypes.PERFORM_TEST_FETCH, request, dispatch);
  };
};
