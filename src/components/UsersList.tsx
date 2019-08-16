import * as React from "react";
import { IUser, IUserState } from "../types/User";

interface IUsersListProps extends IUserState {}

export const UserList: React.FC<IUsersListProps> = props => {
  const { users } = props;
  return (
    <ul className="user-container">
      {users &&
        users.map((user: IUser) => {
          return <li key={user.name}>{user.name}</li>;
        })}
    </ul>
  );
};
