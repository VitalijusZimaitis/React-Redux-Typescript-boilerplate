import { AxiosResponse } from "axios";
import { BaseAppState } from "./App";
import { BaseAction } from "./Thunk";

export interface TApiUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface TUserState extends BaseAppState<string> {
  readonly data?: Array<TApiUserEntity>;
  readonly loading?: boolean;
}

export const initialUserState: TUserState = {
  data: undefined,
};

export enum UserGetAll {
  REQUEST = "USER_GET_ALL_REQUEST",
  SUCCESS = "USER_GET_ALL_SUCCESS",
  FAILED = "USER_GET_ALL_FAILED",
}

export type TUserGetAllAction =
  | BaseAction<UserGetAll.REQUEST>
  | BaseAction<
      UserGetAll.SUCCESS,
      AxiosResponse<Array<TApiUserEntity>>,
      { test: string }
    >
  | BaseAction<UserGetAll.FAILED>;

export type TUserActions = TUserGetAllAction;
