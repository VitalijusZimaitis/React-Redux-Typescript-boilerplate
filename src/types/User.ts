import { IModel } from "./Model";
import { AxiosResponse, AxiosError } from "axios";

export interface TApiUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface TApiUser {
  users: TApiUserEntity[];
}

export interface IUserState extends IModel {}

export const initialUserState: IUserState = {
  data: []
};

export enum UserGetAll {
  REQUEST = "USER_GET_ALL_REQUEST",
  SUCCESS = "USER_GET_ALL_SUCCESS",
  FAILED = "USER_GET_ALL_FAILED"
}

export interface IUserGetAllAction {
  type: UserGetAll.REQUEST | UserGetAll.SUCCESS | UserGetAll.FAILED;
  payload: AxiosResponse & AxiosError;
}

export type UserActions = IUserGetAllAction;
