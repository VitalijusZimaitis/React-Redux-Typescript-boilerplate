import { AxiosError, AxiosResponse } from "axios";
import { BaseAppState } from "./App";

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
  | {
      readonly type: UserGetAll.REQUEST;
    }
  | {
      readonly type: UserGetAll.SUCCESS;
      readonly payload: AxiosResponse<Array<TApiUserEntity>>;
      readonly meta: { test: string };
    }
  | {
      readonly type: UserGetAll.FAILED;
      readonly payload: AxiosError;
    };

export type TUserActions = TUserGetAllAction;
