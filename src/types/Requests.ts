import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../store/Store";
import { AxiosResponse, AxiosError } from "axios";

export type AsyncThunkAction<T, U, P = any> = ThunkAction<
  Promise<P>,
  T,
  IAppState,
  Action<U>
>;

export type TActionCallback<T = any, S = any> = (...args: T[]) => S;
export interface TApiCallback extends AxiosResponse, AxiosError {
  success?: boolean;
  error?: boolean;
}
