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
import { loadingReducer } from "../reducers/LoadingReducer";

export interface IAppState {
  userState: IUserState;
  loading: any;
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined,
  loading: false
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer,
  loading: loadingReducer
});

export default function configureStore(): Store<IAppState, AnyAction> {
  return createStore(
    rootReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
