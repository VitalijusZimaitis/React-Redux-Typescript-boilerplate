import {
  initialUserState,
  TUserActions,
  TUserState,
  UserGetAll,
} from "../../types/User";
import { Reducer } from "redux";

export const usersReducer: Reducer<TUserState, TUserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserGetAll.SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        meta: action.meta.test,
      };
    }

    default:
      return state;
  }
};
