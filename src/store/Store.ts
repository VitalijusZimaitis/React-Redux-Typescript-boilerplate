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
import { TUserState } from "../types/User";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestReducer } from "../reducers/RequestReducer";

export interface IAppState {
  userState: TUserState;
  request: {};
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined,
  request: {}
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer,
  request: requestReducer
});

export default function configureStore(): Store<IAppState, AnyAction> {
  return createStore(
    rootReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
