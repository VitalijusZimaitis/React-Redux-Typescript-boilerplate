import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userApi } from '../services/UserService';

const reducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export { store };
