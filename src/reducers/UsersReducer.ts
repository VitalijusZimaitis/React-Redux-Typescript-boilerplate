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
        data: action.payload
      };
    }

    case UserGetAll.FAILED: {
      if (action.payload.response) {
        return {
          ...state,
          isFetching: false,
          err: true,
          message: action.payload.response.data
        };
      }

      return state;
    }

    default:
      return state;
  }
};
