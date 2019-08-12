import { apiCall, asyncRequest } from "../generic/requests";
import { UserGetAll } from "../types/User";

export const getAllUsers = () => {
  return asyncRequest(UserGetAll, apiCall("GET", `/users`, null, false));
};
