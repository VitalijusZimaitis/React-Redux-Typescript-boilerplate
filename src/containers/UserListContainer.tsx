import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch } from "../types/Thunk";
import { useEffect } from "react";
import { UserActions } from "../actions/UserActions";
import { AxiosResponse } from "axios";
import { TApiUserEntity, TUserState, UserGetAll } from "../types/User";
import UserList from "../components/UserList";
import { IAppState } from "../store/Store";
import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { useApp } from "../hooks/useApp";

const UserListContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<TDispatch>();
  const { app } = useApp();
  const userState: TUserState = useSelector<IAppState, TUserState>(
    (state: IAppState) => state.userState
  );

  useEffect(() => {
    dispatch(UserActions.getAll()).then(
      (res: AxiosResponse<Array<TApiUserEntity>>) => {
        console.log(
          res.data.map((user: TApiUserEntity) => {
            return user.name;
          })
        );
      }
    );
  }, [dispatch]);

  return (
    <>
      <Link to={routes.home}>Back</Link>
      {app.isLoading(UserGetAll) ? (
        <>Loading</>
      ) : (
        <>{userState.data && <UserList users={userState.data} />}</>
      )}
    </>
  );
};

export default UserListContainer;
