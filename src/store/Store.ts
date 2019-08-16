import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  DeepPartial,
  Store
} from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "../reducers/UsersReducer";
import { IUserState } from "../types/User";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IAppState {
  userState: IUserState;
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer
});

export default function configureStore(): Store<IAppState, AnyAction> {
  return createStore(
    rootReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
