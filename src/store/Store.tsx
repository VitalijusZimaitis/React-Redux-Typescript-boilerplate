import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { IUserState, usersReducer } from "../reducers/UsersReducer";

export interface IAppState {
  userState: IUserState;
}

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer
});

export default function configureStore(): Store<IAppState, any> {
  return createStore(rootReducer, undefined, applyMiddleware(thunk));
}
