import { TUserState } from "../types/User";
import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  private userState: TUserState;

  constructor(userState: TUserState) {
    super(userState);
    this.userState = userState;
  }
}
