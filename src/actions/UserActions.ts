import { Action } from "../generic/Action";
import {
  IUserGetAllAction,
  IUserState,
  TApiUser,
  UserGetAll
} from "../types/User";
import { AsyncThunkAction, callbackFunction } from "../types/Requests";
import { Request } from "../generic/Request";

export class UserActions {
  private loaderName: string = "userState";

  public getAllUsers = (
    callback?: callbackFunction
  ): AsyncThunkAction<IUserState, IUserGetAllAction> => {
    return new Action(UserGetAll, this.loaderName).create(
      new Request<null, TApiUser>(`/users`).get(),
      callback
    );
  };
}
