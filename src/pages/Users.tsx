import React from 'react';
import { Link } from 'react-router-dom';

import UserList from '../components/UserList';
import { routes } from '../Routes';
import { useEditUserMutation, useGetUsersQuery } from '../services/UserService';

const Users: React.FC = (): JSX.Element => {
  const { data, isLoading, isFetching } = useGetUsersQuery();
  const [updateUser, { isLoading: isUpdating }] = useEditUserMutation();

  return (
    <>
      <Link to={routes.home}>Back</Link>
      {isLoading && 'Loading...'}
      {(isFetching || isUpdating) && 'Updating...'}
      <hr />
      <button
        disabled={isUpdating}
        type="button"
        onClick={() => updateUser({ id: 1, name: 'Jonas' })}
      >
        Update user with ID 1
      </button>
      <div>{data && <UserList users={data} />}</div>
    </>
  );
};

export default Users;
