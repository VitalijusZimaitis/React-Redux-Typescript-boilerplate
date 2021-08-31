import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { EStateStatus } from '../types';
import { getUsers } from './actions';
import { IUserState } from './types';

const reducer = {};

const thunkReducer = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder.addCase(getUsers.pending, (state) => {
    state.status = EStateStatus.LOADING;
    state.error = null;
  });

  builder.addCase(getUsers.fulfilled, (state, { payload }) => {
    state.status = EStateStatus.IDLE;
    state.data = payload;
  });

  builder.addCase(getUsers.rejected, (state) => {
    state.status = EStateStatus.FAILED;
  });
};

export { reducer, thunkReducer };
