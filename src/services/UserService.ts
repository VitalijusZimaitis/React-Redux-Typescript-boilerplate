import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '../constants/api';
import { IApiUserEntity } from '../store/types/User';

export const userApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<Array<IApiUserEntity>, void>({
      query: () => ApiRoutes.allUsers(),
      providesTags: ['User'],
    }),
    editUser: builder.mutation<
      IApiUserEntity,
      Partial<IApiUserEntity> & Pick<IApiUserEntity, 'id'>
    >({
      query: (body) => ({
        url: ApiRoutes.updateUser(body.id),
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useEditUserMutation } = userApi;
