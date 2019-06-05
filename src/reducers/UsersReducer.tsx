import { initialUserState, UserActions, UserActionTypes } from "../types/User";

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
