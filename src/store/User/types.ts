import { EStateStatus, IBaseAppState } from '../types';

export interface IApiUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserState extends IBaseAppState<IApiUserEntity> {}

export const initialUserState: IUserState = {
  ids: [],
  entities: {},
  error: null,
  status: EStateStatus.IDLE,
};
