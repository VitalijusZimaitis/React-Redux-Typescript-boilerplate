import { initialUserState, UserActions, UserActionTypes } from "../types/User";

export const usersReducer = (state = initialUserState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.GET_ALL_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case UserActionTypes.GET_ALL_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    }

    case UserActionTypes.GET_ALL_FAILED: {
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
