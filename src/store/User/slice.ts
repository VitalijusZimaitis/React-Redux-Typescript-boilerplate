import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { reducer, thunkReducer } from './reducer';
import { IApiUserEntity, initialUserState } from './types';

export const usersAdapter = createEntityAdapter<IApiUserEntity>({
  selectId: ({ id }) => id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const slice = createSlice({
  name: 'user',
  initialState: usersAdapter.getInitialState(initialUserState),
  reducers: reducer,
  extraReducers: thunkReducer,
});
