import { Action } from "../generic/Action";
import { IUserGetAllAction, IUserState, UserGetAll } from "../types/User";
import { AsyncThunkAction, callbackFunction } from "../types/Requests";
import { Request } from "../generic/Request";

export class UserActions {
  public getAllUsers = (
    callback?: callbackFunction
  ): AsyncThunkAction<IUserState, IUserGetAllAction> => {
    return new Action(UserGetAll, "userState").create(
      new Request(`/users`).get(),
      callback
    );
  };
}
