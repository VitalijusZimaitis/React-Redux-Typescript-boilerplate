import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchUsersList } from "../actions/UserActions";
import { TUserState, UserGetAll } from "../types/User";
import UserList from "../components/UserList";
import { IAppState } from "../store/Store";
import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { useApp } from "../hooks/useApp";

const UserListContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { app } = useApp();
  const userState: TUserState = useSelector<IAppState, TUserState>(
    (state: IAppState) => state.userState
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getUserList = useCallback(async () => {
    try {
      dispatch(fetchUsersList());
    } catch (e) {
      setError(true);
    }
  }, [dispatch]);

  useEffect(() => {
    getUserList().then(() => {
      setSuccess(true);
    });
  }, [getUserList]);

  return (
    <>
      <Link to={routes.home}>Back</Link>
      {success && <div>User list fetched</div>}
      {error && <div>Error occurred</div>}
      {app.isLoading(UserGetAll) ? (
        <div>Loading</div>
      ) : (
        <div>{userState.data && <UserList users={userState.data} />}</div>
      )}
    </>
  );
};

export default UserListContainer;
