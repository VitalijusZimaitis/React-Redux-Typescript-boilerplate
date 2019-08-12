export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserState {
  readonly isFetching?: boolean;
  readonly users: IUser[] | undefined;
}

export const initialUserState: IUserState = {
  isFetching: false,
  users: []
};

export enum UserGetAll {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

export interface IUserGetAllAction {
  type:
    | UserGetAll.REQUEST
    | UserGetAll.SUCCESS
    | UserGetAll.FAILED;
  payload?: IUser[] | undefined;
}

export type UserActions = IUserGetAllAction;
