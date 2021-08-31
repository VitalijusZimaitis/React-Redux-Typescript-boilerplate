import { createSelector } from '@reduxjs/toolkit';

import { IAppState } from '../types';

export const selectAllUsers = createSelector(
  (state: IAppState) => state.userState,
  (users) => users.data,
);
