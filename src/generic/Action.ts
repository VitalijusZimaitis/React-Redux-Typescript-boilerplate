import { AxiosError, AxiosResponse } from "axios";
import { ActionCreator, Dispatch } from "redux";
import { AsyncThunkAction, callbackFunction } from "../types/Requests";

export class Action<T = any, S = any> {
  private actionType: any;

  constructor(actionType: any) {
    this.actionType = actionType;
  }

  create: ActionCreator<AsyncThunkAction<T, S>> = (
    request: Promise<any>,
    callback: callbackFunction
  ) => {
    return async (dispatch: Dispatch) => {
      dispatch({
        type: this.actionType.REQUEST
      });
      await request
        .then((res: AxiosResponse) => {
          dispatch({
            payload: res.data,
            type: this.actionType.SUCCESS
          });
          if(typeof callback === "function") {
            callback({ ...res, error: false });
          }
        })
        .catch((err: AxiosError) => {
          dispatch({
            payload: err.response,
            type: this.actionType.FAILED
          });
          if(typeof callback === "function") {
            callback({ ...err, error: true });
          }
        });
    };
  };
}
