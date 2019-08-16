import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../actions/UserActions";
import { IUserGetAllAction, IUserState } from "../types/User";
import { UserList } from "../components/UsersList";
import { Dispatch } from "redux";
import { AsyncThunkAction } from "../types/Requests";
import Loading from "../components/Loading";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState: IUserState = useSelector<IAppState, IUserState>(
    (state: IAppState) => state.userState
  );
  const dispatch = useDispatch<Dispatch<any>>();

  const fetchUsersList = (): AsyncThunkAction<
    IUserState,
    IUserGetAllAction
  > => {
    return dispatch(
      getAllUsers(() => {
        console.log("Test");
      })
    );
  };

  return (
    <>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {userState && userState.isFetching && <Loading />}
      <ul className="user-container">
        <UserList users={userState.users} />
      </ul>
    </>
  );
};

export default UsersListContainer;
