import {
  initialUserState,
  TUserActions,
  TUserState,
  UserGetAll
} from "../types/User";
import { Reducer } from "redux";

export const usersReducer: Reducer<TUserState, TUserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserGetAll.SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      };
    }

    case UserGetAll.FAILED: {
      if (action.payload.response) {
        return {
          ...state,
          message: action.payload.response.data
        };
      }

      return state;
    }

    default:
      return state;
  }
};
