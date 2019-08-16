import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../actions/UserActions";
import { IUserGetAllAction, IUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import { AsyncThunkAction } from "../types/Requests";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: IUserState = useSelector<IAppState, IUserState>(
    (state: IAppState) => state.userState
  );
  const dispatch = useDispatch<Dispatch<any>>();
  const [title, setTitle] = useState<string>("React App");

  const fetchUsersList = (): AsyncThunkAction<
    IUserState,
    IUserGetAllAction
  > => {
    return dispatch(
      getAllUsers(() => {
        setTitle("React App Updated");
      })
    );
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <h1>{title}</h1>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {userState && userState.isFetching ? (
        <Loading />
      ) : (
        <UserList users={userState.users} />
      )}
    </>
  );
};

export default UsersListContainer;
