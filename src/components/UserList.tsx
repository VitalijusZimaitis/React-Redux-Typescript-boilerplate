import React from 'react';
import { Link } from 'react-router-dom';
import { reverse } from 'named-urls';

import { routes } from '../Routes';
import { IApiUserEntity } from '../store/User/types';

interface IUserListProps {
  users: Array<IApiUserEntity>;
}

const UserList: React.FC<IUserListProps> = ({ users }): JSX.Element => (
  <ul>
    {users?.map((user) => (
      <li key={user.id}>
        <Link to={reverse(routes.userProfile, { id: user.id })}>{user.name}</Link>
      </li>
    ))}
  </ul>
);

export default UserList;
