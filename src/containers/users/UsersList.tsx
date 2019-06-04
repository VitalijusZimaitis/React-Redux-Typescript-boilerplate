import * as React from "react";
import { IAppState } from "../../store/Store";
import { connect } from "react-redux";
import { IUser, IUserState } from "../../reducers/UsersReducer";
import { bindActionCreators, Dispatch } from "redux";
import {
  IUserGetAllAction,
  IUserGetAllActionType
} from "../../actions/UserActions";
import { getAllUsers } from "../../actions/UserActions";

interface IStateProps {
  userState: IUserState;
}

interface IDispatchProps {
  getAllUsers: IUserGetAllActionType;
}

type IActions = IUserGetAllAction;
type IProps = IStateProps & IDispatchProps;

class UsersList extends React.Component<IProps> {
  public render() {
    const { userState } = this.props;
    const { users } = this.props.userState;
    return (
      <>
        <button onClick={this.fetchUsersList}>Fetch Users</button>
        {userState && userState.loading && <h1>Loading</h1>}
        <ul className="user-container">
          {users &&
            users.map((user: IUser) => {
              return <li key={user.name}>{user.name}</li>;
            })}
        </ul>
      </>
    );
  }

  private fetchUsersList = () => {
    const { getAllUsers } = this.props;
    return getAllUsers();
  };
}

const mapStateToProps = (store: IAppState) => {
  return {
    userState: store.userState
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IActions>): IDispatchProps => {
  return bindActionCreators({ getAllUsers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
