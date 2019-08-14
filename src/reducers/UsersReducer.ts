import { initialUserState, UserActions, UserGetAll } from "../types/User";

export const usersReducer = (state = initialUserState, action: UserActions) => {
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
