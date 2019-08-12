import * as React from "react";
import { IUser } from "../types/User";

interface IOwnProps {
  user: IUser;
}

export const UserList: React.FC<IOwnProps> = props => {
  const { user } = props;
  return <li key={user.name}>{user.name}</li>;
};
