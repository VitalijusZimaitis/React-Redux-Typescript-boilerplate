import * as React from "react";
import { TApiUserEntity, IUserState } from "../types/User";

interface IUsersListProps extends IUserState {}

export const UserList: React.FC<IUsersListProps> = props => {
  const { data } = props;
  return (
    <ul className="user-container">
      {data &&
        data.map((user: TApiUserEntity) => {
          return <li key={user.name}>{user.name}</li>;
        })}
    </ul>
  );
};
