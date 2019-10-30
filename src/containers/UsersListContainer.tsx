import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { IUserGetAllAction, IUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { UserActions } from "../actions/UserActions";
import { AsyncThunkAction, TApiCallback } from "../types/Requests";
import { User } from "../models/User";
import { useLoader } from "../hooks/useLoader";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: IUserState = useSelector<IAppState, IUserState>(
    (state: IAppState) => state.userState
  );
  const [loading] = useLoader();
  const dispatch = useDispatch<Dispatch<any>>();
  const [title, setTitle] = useState<string>("React App");
  const userActions: UserActions = new UserActions();
  const [users, setUsers] = useState<User>(new User(userState));

  const fetchUsersList = (): AsyncThunkAction<
    IUserState,
    IUserGetAllAction
  > => {
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

  return (
    <>
      <h1>{title}</h1>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {users && loading.userState ? (
        <Loading />
      ) : (
        <UserList data={users.all()} />
      )}
    </>
  );
};

export default UsersListContainer;
