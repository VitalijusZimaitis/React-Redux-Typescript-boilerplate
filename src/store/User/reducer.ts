import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { EStateStatus } from '../types';
import { getUsers } from './actions';
import { usersAdapter } from './slice';
import { IUserState } from './types';

const reducer = {};

const thunkReducer = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(getUsers.pending, (state) => {
      state.status = EStateStatus.LOADING;
    })
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      usersAdapter.setAll(state, payload);
    })
    .addCase(getUsers.rejected, (state) => {
      state.status = EStateStatus.FAILED;
    });
};

export { reducer, thunkReducer };
