import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export interface IUserState {
    readonly loading?: boolean;
    readonly users: IUser[] | undefined;
}

export const initialUserState: IUserState = {
    loading: false,
    users: []
};

export enum UserActionTypes {
  GET_ALL_REQUEST = "GET_ALL_REQUEST",
  GET_ALL_SUCCESS = "GET_ALL_SUCCESS",
  GET_ALL_FAILED = "GET_ALL_FAILED"
}

export interface IUserGetAllAction {
  type:
    | UserActionTypes.GET_ALL_REQUEST
    | UserActionTypes.GET_ALL_SUCCESS
    | UserActionTypes.GET_ALL_FAILED;
  payload?: IUser[] | undefined;
}
export type IUserGetAllActionType = ActionCreator<
  ThunkAction<Promise<any>, IUserState, null, IUserGetAllAction>
>;

export type UserActions = IUserGetAllAction;
