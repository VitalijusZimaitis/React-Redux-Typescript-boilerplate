import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IApiUserEntity } from '../store/types/User';

export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<Array<IApiUserEntity>, {}>({
      query: () => '/users',
    }),
  }),
})

export const { useGetUsersQuery } = userApi;
