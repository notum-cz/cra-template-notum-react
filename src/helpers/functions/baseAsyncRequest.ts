/* eslint-disable complexity */
/* eslint-disable max-params */
import { Action, Dispatch } from "redux";
import * as Sentry from "@sentry/browser";

import { ActionTypes } from "../../store/actionTypes";
import { RequestState } from "../enums/RequestState";
import { setRequestState } from "../../store/requestState/actions";
import { strapiErrors, DEFAULT_ERROR_MESSAGE } from "../constants/strapiErrors";
import { codeErrors } from "../constants/codeErrors";

interface ErrorRequestOption {
  sentryCapture?: boolean;
  customCodeErrors?: Record<number, string>;
}

const errorDefaultOptions: ErrorRequestOption = {
  sentryCapture: true,
};

const getStrapiErrorMessage = (id: string): string | undefined => {
  if (id in strapiErrors) {
    return strapiErrors[id];
  }

  return undefined;
};

export const baseAsyncRequest = async <T>(
  actionType: ActionTypes,
  request: () => Promise<T>,
  dispatch: Dispatch<Action>,
  errorOptions?: ErrorRequestOption
): Promise<T | undefined> => {
  dispatch({ type: actionType });

  try {
    dispatch(
      setRequestState({
        requestState: RequestState.Loading,
        actionType,
      })
    );

    const results = await request();

    dispatch(
      setRequestState({ requestState: RequestState.Success, actionType })
    );
    return results;
  } catch ({ response: err }) {
    if (err) {
      const options = { ...errorDefaultOptions, ...errorOptions };
      const { sentryCapture, customCodeErrors } = options;

      if (sentryCapture) {
        Sentry.captureException(err);
      }

      if (!process.env.REACT_APP_USING_STRAPI) {
        return undefined;
      }

      let errorMessage;

      const { message, statusCode } = err.data;

      const errorId = Array.isArray(message)
        ? message[0].messages[0].id
        : statusCode;

      if (customCodeErrors && statusCode in customCodeErrors) {
        errorMessage = customCodeErrors[statusCode];
      } else if (typeof errorId === "string") {
        errorMessage = getStrapiErrorMessage(errorId);
      } else if (statusCode in codeErrors) {
        errorMessage = codeErrors[statusCode];
      }

      if (!errorMessage) {
        errorMessage = DEFAULT_ERROR_MESSAGE;
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[MISSING ERROR MAPPING]",
            `Please provide mapping for "${errorId}" error in strapiErrors.ts`
          );
        }
      }

      dispatch(
        setRequestState({
          requestState: RequestState.Failure,
          actionType,
          message: errorMessage,
        })
      );

      return undefined;
    }
    return undefined;
  }
};
