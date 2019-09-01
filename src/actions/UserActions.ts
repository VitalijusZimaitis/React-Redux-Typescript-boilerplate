import { IUserGetAllAction, IUserState, UserGetAll } from "../types/User";
import { AsyncThunkAction, callbackFunction } from "../types/Requests";
import { Action } from "../generic/Action";
import { Api } from "../generic/Api";

export const getAllUsers = (
  callback?: callbackFunction
): AsyncThunkAction<IUserState, IUserGetAllAction> => {
  return Action.create(UserGetAll, Api.call("GET", `/users`), callback);
};
