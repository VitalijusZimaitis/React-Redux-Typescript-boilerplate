import { UserActions, UserActionTypes } from "../actions/UserActions";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserState {
  readonly loading?: boolean;
  readonly users: IUser[] | undefined;
}

const initialUserState: IUserState = {
  loading: false,
  users: []
};

export const usersReducer = (state = initialUserState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.GET_ALL_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case UserActionTypes.GET_ALL_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    }

    case UserActionTypes.GET_ALL_FAILED: {
      return {
        ...state,
        loading: false,
        err: true,
        message: action.payload
      };
    }

    default:
      return state;
  }
};
