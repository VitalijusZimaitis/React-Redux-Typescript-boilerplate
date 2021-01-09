import {
  initialUserState,
  TUserActions,
  TUserState,
  UserGetAll,
} from "../../types/User";
import { Reducer } from "redux";
import { endReducer } from "../Store";

export const usersReducer: Reducer<TUserState, TUserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserGetAll.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UserGetAll.SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        meta: action.meta.test,
      };
    }

    case UserGetAll.FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return endReducer(state, action);
  }
};
