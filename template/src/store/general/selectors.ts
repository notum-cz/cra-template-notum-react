import { AppLanguages } from "../../helpers/constants/languages";
import { CombinedState } from "../combinedReducers";

export const getSelectedLanguage = (state: CombinedState): AppLanguages =>
  state.general.language;
