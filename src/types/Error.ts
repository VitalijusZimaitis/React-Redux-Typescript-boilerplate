export interface TErrorState {
  message?: string;
  code?: number;
}

export enum SetAppError {
  REQUEST = "SET_APP_ERROR_REQUEST",
  SUCCESS = "SET_APP_ERROR_SUCCESS",
  FAILED = "SET_APP_ERROR_FAILED",
}

export type TSetAppErrorAction =
  | {
      type: SetAppError.REQUEST;
    }
  | {
      type: SetAppError.SUCCESS;
      payload: TErrorState;
    }
  | {
      type: SetAppError.FAILED;
    };

export type TErrorActions = TSetAppErrorAction;
