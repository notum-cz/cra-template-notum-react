import { Action, Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { makeServerCallAsync } from "../../helpers/functions/http";
import { baseAsyncRequest } from "../../helpers/functions/baseAsyncRequest";
import { ActionTypes } from "../actionTypes";

export const performExampleFetch = () => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    const request = async (): Promise<AxiosResponse<any>> => {
      return makeServerCallAsync<any, any>("get", `/todos`);
    };

    await baseAsyncRequest(ActionTypes.PERFORM_TEST_FETCH, request, dispatch);
  };
};
