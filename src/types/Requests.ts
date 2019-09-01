import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../store/Store";

export type AsyncThunkAction<T, U> = ThunkAction<
  Promise<any>,
  T,
  IAppState,
  Action<U>
>;

export type callbackFunction<T = any, S = any> = (...args: T[]) => S;
