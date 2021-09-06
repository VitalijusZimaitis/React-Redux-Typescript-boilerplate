import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { slice as UserSlice } from './User/slice';

const reducers = combineReducers({
  users: UserSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export { store };
