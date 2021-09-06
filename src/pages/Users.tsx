import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserList from '../components/UserList';
import { routes } from '../Routes';
import { useAppSelector } from '../store/hooks';
import { getUsers } from '../store/User/actions';
import { selectAllUsers, selectTotalUsers } from '../store/User/selectors';

const Users: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useAppSelector(selectAllUsers);
  const totalUsers = useAppSelector(selectTotalUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Link to={routes.home}>Back</Link>
      <h4>
        Total users:
        {totalUsers}
      </h4>
      <div>{users && <UserList users={users} />}</div>
    </>
  );
};

export default Users;
