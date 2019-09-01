import { AxiosError, AxiosResponse } from "axios";
import { ActionCreator, Dispatch } from "redux";
import { AsyncThunkAction } from "../types/Requests";

export abstract class Action {
  static create: ActionCreator<AsyncThunkAction<any, any>> = (
    actionType: any,
    request: Promise<any>,
    successCallback?: (...args: any) => any
  ) => {
    return async (dispatch: Dispatch) => {
      dispatch({
        type: actionType.REQUEST
      });
      await request
        .then((res: AxiosResponse) => {
          dispatch({
            payload: res.data,
            type: actionType.SUCCESS
          });
        })
        .then(() => {
          if (typeof successCallback === "function") {
            return successCallback();
          }
        })
        .catch((err: AxiosError) => {
          dispatch({
            payload: err.response,
            type: actionType.FAILED
          });
        });
    };
  };
}
