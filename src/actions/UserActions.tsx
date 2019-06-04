import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AxiosError, AxiosResponse } from "axios";
import { IUser, IUserState } from "../reducers/UsersReducer";
import { apiRequest } from "../generic/requests";

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

export const getAllUsers: IUserGetAllActionType = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UserActionTypes.GET_ALL_REQUEST
    });
    apiRequest("GET", `/users`, null, false)
      .then((res: AxiosResponse) => {
        dispatch({
          payload: res.data,
          type: UserActionTypes.GET_ALL_SUCCESS
        });
      })
      .catch((err: AxiosError) => {
        dispatch({
          payload: err.response,
          type: UserActionTypes.GET_ALL_FAILED
        });
      });
  };
};
