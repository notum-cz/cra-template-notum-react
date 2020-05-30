import { reducer } from "ts-action";
import {
  AppLanguages,
  DEFAULT_LANGUAGE,
} from "../../helpers/constants/languages";

export interface State {
  language: AppLanguages;
}

export const initialState: State = {
  language: DEFAULT_LANGUAGE,
};

export const generalReducer = reducer<State>(initialState);
