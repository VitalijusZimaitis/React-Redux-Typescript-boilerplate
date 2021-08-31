import { store } from './Store';

export interface IAppState extends ReturnType<typeof store.getState> {}
export type TAppDispatch = typeof store.dispatch;

export enum EStateStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export interface IBaseAppState {
  readonly status: EStateStatus;
  readonly error: string | null;
}
