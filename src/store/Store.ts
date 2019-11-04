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
import { loadingReducer } from "../reducers/LoadingReducer";
import { errorReducer } from "../reducers/ErrorReducer";

export interface IAppState {
  userState: TUserState;
  loading: any;
  error: any;
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined,
  loading: false,
  error: undefined
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default function configureStore(): Store<IAppState, AnyAction> {
  return createStore(
    rootReducer,
    initialAppState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
