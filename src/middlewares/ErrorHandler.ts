import { AxiosResponse, AxiosError } from "axios";
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from "redux";
import { errorAction } from "../actions/BaseAction";
import i18n from "../config/i18next";

interface IAction {
  type: any;
  payload: AxiosResponse<any> & AxiosError<any>;
}

export const ErrorHandler: Middleware = (state: MiddlewareAPI<any>) => (
  next: Dispatch<AnyAction>
) => (action: IAction) => {
  if (action.type.includes("_FAILED")) {
    switch (action.payload.response?.status) {
      case 401:
        state.dispatch(
          errorAction({ message: i18n.t("Unauthorized"), code: 401 })
        );
        break;

      case 403:
        state.dispatch(
          errorAction({ message: i18n.t("Forbidden"), code: 403 })
        );
        break;

      case 404:
        state.dispatch(
          errorAction({ message: i18n.t("Not found"), code: 404 })
        );
        break;

      case 500:
        state.dispatch(
          errorAction({ message: i18n.t("Internal server error"), code: 500 })
        );
        break;
    }
  }

  return next(action);
};
