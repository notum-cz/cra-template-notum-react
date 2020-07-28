import { RequestActionTypes } from "../helpers/enums/actionTypes/request";

export const ActionTypes = {
  ...RequestActionTypes,
};

// All ActionTypes as Type
export type ActionTypes = RequestActionTypes;
