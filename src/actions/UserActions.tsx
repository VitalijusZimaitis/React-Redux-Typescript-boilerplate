import { apiCall, asyncRequest } from "../generic/requests";
import { UserGetAll } from "../types/User";

export const getAllUsers = (callback?: (...args: any) => any) => {
  return asyncRequest(
    UserGetAll,
    apiCall("GET", `/users`, null, false),
    callback
  );
};
