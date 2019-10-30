import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../store/Store";
import { AxiosResponse, AxiosError } from "axios";

export type AsyncThunkAction<T, U> = ThunkAction<
  Promise<any>,
  T,
  IAppState,
  Action<U>
>;

export type callbackFunction<T = any, S = any> = (...args: T[]) => S;
export interface TApiCallback extends AxiosResponse, AxiosError {
  success?: boolean;
  error?: boolean;
}
