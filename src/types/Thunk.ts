import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../store/Store";
import { Action } from "redux";

export type BaseAsyncAction<T, P = undefined, M = undefined> = {
  readonly type: T;
  readonly payload: P;
  readonly meta: M;
};

export type TDispatch<T = any> = ThunkDispatch<IAppState, any, Action<T>>;
