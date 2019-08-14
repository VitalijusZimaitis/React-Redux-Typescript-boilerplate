import * as React from "react";
import { IUser } from "../types/User";

interface IUsersListProps {
  user: IUser;
}

export const UserList: React.FC<IUsersListProps> = props => {
  const { user } = props;
  return <li key={user.name}>{user.name}</li>;
};
