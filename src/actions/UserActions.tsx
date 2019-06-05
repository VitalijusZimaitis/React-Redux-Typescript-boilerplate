import { Dispatch } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import { apiRequest } from "../generic/requests";
import { IUserGetAllActionType, UserActionTypes } from "../types/User";

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
