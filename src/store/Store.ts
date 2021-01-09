import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  DeepPartial,
  Store,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TUserState } from "../types/User";
import { usersReducer } from "./reducers/UserReducer";
import { requestReducer } from "./reducers/RequestReducer";
import { ErrorHandler } from "./middlewares/ErrorHandler";

export interface IAppState {
  userState: TUserState;
  appState: any;
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined,
  appState: {},
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer,
  appState: requestReducer,
});

export function endReducer<T>(state: T, action: never): T {
  return state;
}

export default function configureStore(): Store<IAppState, AnyAction> {
  return createStore(
    rootReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk, ErrorHandler))
  );
}
