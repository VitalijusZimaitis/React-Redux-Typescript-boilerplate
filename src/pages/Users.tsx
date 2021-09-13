import React from 'react';
import { Link } from 'react-router-dom';

import UserList from '../components/UserList';
import { routes } from '../Routes';
import { useGetUsersQuery } from '../services/UserService';

const Users: React.FC = (): JSX.Element => {
  const { data, isLoading, isFetching } = useGetUsersQuery({}, {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  return (
    <>
      <Link to={routes.home}>Back</Link>
      {isLoading && 'Loading...'}
      {isFetching && 'Updating...'}
      <div>{data && <UserList users={data} />}</div>
    </>
  );
};

export default Users;
