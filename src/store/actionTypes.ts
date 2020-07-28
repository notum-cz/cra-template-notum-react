import { RequestActionTypes } from "../helpers/enums/actionTypes/request";

enum TestActionTypes {
  PERFORM_TEST_FETCH = "[request] PERFORM_TEST_FETCH",
}

export const ActionTypes = {
  ...RequestActionTypes,
  ...TestActionTypes,
};

// All ActionTypes as Type
export type ActionTypes = RequestActionTypes | TestActionTypes;
