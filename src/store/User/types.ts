import { EStateStatus, IBaseAppState } from '../types';

export interface IApiUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserState extends IBaseAppState {
  data: Array<IApiUserEntity>;
}

export const initialUserState: IUserState = {
  data: [],
  status: EStateStatus.IDLE,
  error: null,
};
