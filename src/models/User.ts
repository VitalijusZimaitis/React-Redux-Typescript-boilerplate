import { IUserState } from "../types/User";
import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  private userState: IUserState;

  constructor(userState: IUserState) {
    super(userState);
    this.userState = userState;
  }
}
