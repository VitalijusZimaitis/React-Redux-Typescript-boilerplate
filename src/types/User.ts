import { AxiosResponse, AxiosError } from "axios";

export interface TApiUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface TUserState {
  readonly data?: Array<TApiUserEntity>;
}

export const initialUserState: TUserState = {
  data: undefined
};

export enum UserGetAll {
  REQUEST = "USER_GET_ALL_REQUEST",
  SUCCESS = "USER_GET_ALL_SUCCESS",
  FAILED = "USER_GET_ALL_FAILED"
}

export type TUserGetAllAction =
  | {
      type: UserGetAll.REQUEST;
    }
  | {
      type: UserGetAll.SUCCESS;
      payload: AxiosResponse<Array<TApiUserEntity>>;
    }
  | {
      type: UserGetAll.FAILED;
      payload: AxiosError;
    };

export type TUserActions = TUserGetAllAction;
