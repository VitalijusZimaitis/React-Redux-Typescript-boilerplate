import {
  applyMiddleware,
  combineReducers,
  createStore,
  DeepPartial,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TUserState } from "../types/User";
import { usersReducer } from "./reducers/UserReducer";
import { requestReducer } from "./reducers/RequestReducer";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface IAppState {
  userState: TUserState;
  appState: any;
}

const initialAppState: DeepPartial<IAppState> = {
  userState: undefined,
  appState: {},
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["appState"],
};

const rootReducer = combineReducers<IAppState>({
  userState: usersReducer,
  appState: requestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function endReducer<T>(state: T, action: never): T {
  return state;
}

const store = createStore(
  persistedReducer,
  initialAppState,
  composeWithDevTools(applyMiddleware(thunk, ErrorHandler))
);

const persistor = persistStore(store);

export { store, persistor };
