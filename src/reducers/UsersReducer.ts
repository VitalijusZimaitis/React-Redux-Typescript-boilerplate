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
    case UserGetAll.SUCCESS: {
      return {
        ...state,
        data: action.payload
      };
    }

    case UserGetAll.FAILED: {
      if (action.payload.response) {
        return {
          ...state,
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
