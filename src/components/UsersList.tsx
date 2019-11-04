import * as React from "react";
import { TApiUserEntity } from "../types/User";

interface IUsersListProps {
  users: TApiUserEntity[];
}

export const UserList: React.FC<IUsersListProps> = props => {
  const { users } = props;
  return (
    <ul className="user-container">
      {users &&
        users.map((user: TApiUserEntity) => {
          return <li key={user.name}>{user.name}</li>;
        })}
    </ul>
  );
};
