import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { IUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { UserActions } from "../actions/UserActions";
import { callbackParam } from "../types/Requests";
import { User } from "../models/User";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: IUserState = useSelector<IAppState, IUserState>(
    (state: IAppState) => state.userState
  );
  const dispatch = useDispatch<Dispatch<any>>();
  const [title, setTitle] = useState<string>("React App");
  const userActions: UserActions = new UserActions();
  const [users, setUsers] = useState<User>(new User(userState));

  const fetchUsersList = () => {
    return dispatch(
      userActions.getAllUsers((data: callbackParam) => {
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
      {users && users.loading() ? <Loading /> : <UserList data={users.all()} />}
    </>
  );
};

export default UsersListContainer;
