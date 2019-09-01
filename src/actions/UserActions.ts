import { IUserGetAllAction, IUserState, UserGetAll } from "../types/User";
import { AsyncThunkAction } from "../types/Requests";
import { Action } from "../generic/Action";
import { Api } from "../generic/Api";

export const getAllUsers = (
  callback?: (...args: any) => any
): AsyncThunkAction<IUserState, IUserGetAllAction> => {
  return Action.generate(UserGetAll, Api.call("GET", `/users`), callback);
};
