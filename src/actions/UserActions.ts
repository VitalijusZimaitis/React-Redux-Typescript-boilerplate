import { Action } from "../generic/Action";
import {
  TUserGetAllAction,
  TUserState,
  TApiUserEntity,
  UserGetAll
} from "../types/User";
import { AsyncThunkAction, TActionCallback } from "../types/Requests";
import { Request } from "../generic/Request";

export class UserActions {
  private requestName: string = "userState";

  getRequestName = (): string => {
    return this.requestName;
  };

  getAllUsers = (
    callback?: TActionCallback
  ): AsyncThunkAction<TUserState, TUserGetAllAction> => {
    return new Action(UserGetAll, this.requestName).create(
      new Request<null, TApiUserEntity[]>(`/users`).get(),
      callback
    );
  };
}
