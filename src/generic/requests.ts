import axios, { Method } from "axios";
import { getLocalStorage } from "./helpers";
import { config } from "./config";
import {ActionCreator, Dispatch} from "redux";
import { AxiosResponse, AxiosError } from "axios";
import { AsyncThunkAction } from "../types/Requests";

export const apiCall = async (
  method: Method,
  url: string,
  data: any = {},
  authorized: boolean = false,
  params: any = {}
): Promise<any> => {
  return await axios.request({
    data,
    headers: {
      Authorization: authorized ? "Bearer " + getLocalStorage("token") : "",
      "Content-Type": "application/json"
    },
    method,
    params,
    url: `${config.BASE_API_URL}${url}`
  });
};

export const asyncRequest: ActionCreator<AsyncThunkAction<any, any>> = (
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
