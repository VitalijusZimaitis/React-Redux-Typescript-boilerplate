import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { TUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { UserActions } from "../actions/UserActions";
import { TApiCallback } from "../types/Requests";
import { User } from "../models/User";
import { useLoader } from "../hooks/useLoader";
import { useErrorHandler } from "../hooks/useErrorHandler";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: TUserState = useSelector<IAppState, TUserState>(
    (state: IAppState) => state.userState
  );
  const [loading] = useLoader();
  const [error] = useErrorHandler();
  const dispatch = useDispatch<Dispatch<any>>();
  const [title, setTitle] = useState<string>("React App");
  const userActions: UserActions = new UserActions();
  const [users, setUsers] = useState<User>(new User(userState));

  const fetchUsersList = () => {
    return dispatch(
      userActions.getAllUsers((data: TApiCallback) => {
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

  if (error.userState) {
    return <div>{error.userState.message}</div>;
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {users && loading.userState ? (
        <Loading />
      ) : (
        <UserList users={users.all()} />
      )}
    </>
  );
};

export default UsersListContainer;
