import {
  initialUserState,
  IUserState,
  UserActions,
  UserGetAll
} from "../types/User";
import { Reducer } from "redux";

export const usersReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserGetAll.REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case UserGetAll.SUCCESS: {
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    }

    case UserGetAll.FAILED: {
      return {
        ...state,
        isFetching: false,
        err: true,
        message: action.payload
      };
    }

    default:
      return state;
  }
};
