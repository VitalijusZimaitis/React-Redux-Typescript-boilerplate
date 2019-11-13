import * as React from "react";
import { TApiUserEntity } from "../types/User";
import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { reverse } from "named-urls";

interface IUsersListProps {
  users: TApiUserEntity[];
}

export const UserList: React.FC<IUsersListProps> = props => {
  const { users } = props;
  return (
    <ul className="user-container">
      {users &&
        users.map((user: TApiUserEntity) => {
          return (
            <li key={user.name}>
              <Link to={reverse(routes.user, { id: user.id })}>
                {user.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
