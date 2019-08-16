import { apiCall, asyncRequest } from "../generic/requests";
import { IUserGetAllAction, IUserState, UserGetAll } from "../types/User";
import { AsyncThunkAction } from "../types/Requests";

export const getAllUsers = (
  callback?: (...args: any) => any
): AsyncThunkAction<IUserState, IUserGetAllAction> => {
  return asyncRequest(UserGetAll, apiCall("GET", `/users`), callback);
};
