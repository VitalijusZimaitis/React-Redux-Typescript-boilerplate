import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserService } from '../../services/UserService';
import { UserActions } from './constants';

export const getUsers = createAsyncThunk(
  UserActions.fetchAllUsers,
  async (_payload, { rejectWithValue }) => {
    try {
      const users = await UserService.fetchAllUsers();

      return users.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data.message,
      });
    }
  },
);
