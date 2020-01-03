import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../store/Store";
import { Action } from "redux";

export type TDispatch<T = any> = ThunkDispatch<IAppState, any, Action<T>>;
