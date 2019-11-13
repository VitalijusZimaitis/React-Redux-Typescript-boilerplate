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

export interface TApiCallback<T = any> extends AxiosResponse<T>, AxiosError<T> {
  success?: boolean;
  error?: boolean;
}
export type TActionCallback<S = any> = (data: TApiCallback) => S;
