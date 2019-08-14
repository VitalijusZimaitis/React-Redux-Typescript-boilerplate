import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "../reducers/UsersReducer";
import { IUserState } from "../types/User";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IAppState {
  userState: IUserState;
}

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer
});

export default function configureStore(): Store<IAppState, any> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
