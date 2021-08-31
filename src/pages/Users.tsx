import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import UserList from '../components/UserList';
import { routes } from '../Routes';
import { getUsers } from '../store/User/actions';
import { selectAllUsers } from '../store/User/selectors';

const Users: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Link to={routes.home}>Back</Link>
      <div>{users && <UserList users={users} />}</div>
    </>
  );
};

export default Users;
