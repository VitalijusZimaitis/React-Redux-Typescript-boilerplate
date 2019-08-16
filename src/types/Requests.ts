import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../store/Store";

export type AsyncThunkAction<T, U> = ThunkAction<
  Promise<any>,
  T,
  IAppState,
  Action<U>
>;
