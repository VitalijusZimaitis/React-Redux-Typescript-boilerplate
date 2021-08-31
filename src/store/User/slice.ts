import { createSlice } from '@reduxjs/toolkit';

import { reducer, thunkReducer } from './reducer';
import { initialUserState } from './types';

export const slice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: reducer,
  extraReducers: thunkReducer,
});
