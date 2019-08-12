import * as React from "react";
import { IAppState } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../actions/UserActions";
import { IUser } from "../types/User";
import { UserList } from "../components/UsersList";

const UsersListContainer: React.FC = (): JSX.Element => {
  const userState = useSelector((state: IAppState) => state.userState);
  const { users } = userState;
  const dispatch = useDispatch();

  const fetchUsersList = () => {
    return dispatch(getAllUsers());
  };

  return (
    <>
      <button onClick={fetchUsersList}>Fetch Users</button>
      {userState && userState.isFetching && <h1>Loading</h1>}
      <ul className="user-container">
        {users &&
          users.map((user: IUser) => {
            return <UserList key={user.id} user={user} />;
          })}
      </ul>
    </>
  );
};

export default UsersListContainer;
