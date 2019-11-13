import { Action } from "../generic/Action";
import {
  TUserGetAllAction,
  TUserState,
  TApiUserEntity,
  UserGetAll
} from "../types/User";
import { AsyncThunkAction, TActionCallback } from "../types/Requests";
import { Request } from "../generic/Request";
import { BaseAction } from "./BaseAction";

export class UserActions extends BaseAction {
  constructor() {
    super();
    this.setRequestName("userState");
  }

  getAllUsers = (
    callback?: TActionCallback
  ): AsyncThunkAction<TUserState, TUserGetAllAction> => {
    return new Action(UserGetAll, this.getRequestName()).create(
      new Request<null, TApiUserEntity[]>(`/users`).get(),
      callback
    );
  };
}
