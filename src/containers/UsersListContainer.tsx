import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { TApiUserEntity, TUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { UserActions } from "../actions/UserActions";
import { TApiCallback } from "../types/Requests";
import { User } from "../models/User";
import { useRequest } from "../hooks/useRequest";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: TUserState = useSelector<IAppState, TUserState>(
    (state: IAppState) => state.userState
  );
  const {
    request: { isLoading, hasError, getError }
  } = useRequest();
  const dispatch = useDispatch<Dispatch<any>>();
  const [title, setTitle] = useState<string>("React App");
  const userActions: UserActions = new UserActions();
  const [users, setUsers] = useState<User>(new User(userState));

  const fetchUsersList = () => {
    return dispatch(
      userActions.getAllUsers((data: TApiCallback<TApiUserEntity[]>) => {
        if (data.success) {
          setTitle("React App - Success");
        }
      })
    );
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  useEffect(() => {
    setUsers(new User(userState));
  }, [userState]);

  if (hasError(userActions.getRequestName())) {
    return <div>{getError(userActions.getRequestName()).message}</div>;
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {isLoading(userActions.getRequestName()) ? (
        <Loading />
      ) : (
        <UserList users={users.all()} />
      )}
    </>
  );
};

export default UsersListContainer;
