import { AxiosError, AxiosResponse } from "axios";
import { ActionCreator, Dispatch } from "redux";
import { AsyncThunkAction, TActionCallback } from "../types/Requests";

export class Action<T = any, S = any> {
  private actionType: any;
  private readonly action: any;

  constructor(actionType: any, loaderName: string) {
    this.actionType = actionType;
    this.action = loaderName;
  }

  create: ActionCreator<AsyncThunkAction<T, S>> = (
    request: Promise<any>,
    callback: TActionCallback
  ) => {
    return async (dispatch: Dispatch) => {
      dispatch({
        type: this.actionType.REQUEST,
        action: this.action
      });
      await request
        .then((res: AxiosResponse) => {
          dispatch({
            payload: res,
            type: this.actionType.SUCCESS,
            action: this.action
          });
          if (typeof callback === "function") {
            callback({ ...res, success: true });
          }
        })
        .catch((err: AxiosError) => {
          console.log(err);
          dispatch({
            payload: err,
            type: this.actionType.FAILED,
            action: this.action
          });
          if (typeof callback === "function") {
            callback({ ...err, error: true });
          }
        });
    };
  };
}
