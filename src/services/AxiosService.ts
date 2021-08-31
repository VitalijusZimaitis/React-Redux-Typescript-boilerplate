import axios, { Method } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { StorageService } from './StorageService';

export class AxiosService {
  public static async apiCall<TRequestData = any, TResponse extends {} = {}>(
    method: Method,
    url: string,
    authorized: boolean = false,
    data: TRequestData | null = {} as TRequestData,
    params: any = {},
  ) {
    const apiClient = axios.create({
      baseURL: process.env.REACT_APP_BASE_API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const refreshAuthToken = (failedRequest: any) => apiClient
      .post('https://www.example.com/auth/token/refresh')
      .then((tokenRefreshResponse) => {
        failedRequest.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.data.token}`;
        return Promise.resolve();
      });

    createAuthRefreshInterceptor(apiClient, refreshAuthToken);

    if (authorized) {
      apiClient.interceptors.request.use((request) => {
        request.headers.Authorization = `Bearer ${StorageService.getAccessToken()}`;
        return request;
      });
    }

    return apiClient.request<TResponse>({
      data,
      method,
      params,
      url,
    });
  }
}
