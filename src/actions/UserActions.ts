import { IUserGetAllAction, IUserState, UserGetAll } from "../types/User";
import { AsyncThunkAction, callbackFunction } from "../types/Requests";
import { Action } from "../generic/Action";
import { Request } from "../generic/Request";

export const getAllUsers = (
  callback?: callbackFunction
): AsyncThunkAction<IUserState, IUserGetAllAction> => {
  return Action.create(UserGetAll, new Request(`/users`).get(), callback);
};
