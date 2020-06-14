import { TApiUserEntity, TUserGetAllAction, UserGetAll } from "../types/User";
import { apiCall } from "./BaseAction";

const fetchUsersList = () => {
  return apiCall<TUserGetAllAction, null, Array<TApiUserEntity>>(
    UserGetAll,
    "GET",
    "/users",
    true
  );
};

export const UserActions = {
  getAll: fetchUsersList
};
