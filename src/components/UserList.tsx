import * as React from "react";
import { TApiUserEntity } from "../types/User";
import { Link } from "react-router-dom";
import { reverse } from "named-urls";
import { routes } from "../Routes";

interface IUserListProps {
  users: Array<TApiUserEntity>;
}

const UserList: React.FC<IUserListProps> = (props): JSX.Element => {
  return (
    <ul>
      {props.users?.map((user: TApiUserEntity) => {
        return (
          <li key={user.id}>
            <Link to={reverse(routes.userProfile, { id: user.id })}>
              {user.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

UserList.defaultProps = {
  users: [],
};

export default UserList;
