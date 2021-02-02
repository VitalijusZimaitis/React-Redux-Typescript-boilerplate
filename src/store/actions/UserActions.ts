import {
  TApiUserEntity,
  TUserGetAllAction,
  UserGetAll,
} from "../../types/User";
import { apiCall } from "./BaseAction";

export const fetchUsersList = () => {
  return apiCall<TUserGetAllAction, null, Array<TApiUserEntity>>(
    UserGetAll,
    "GET",
    "/users",
    true,
    null,
    null,
    {
      test: "Test message for additional data",
    }
  );
};
