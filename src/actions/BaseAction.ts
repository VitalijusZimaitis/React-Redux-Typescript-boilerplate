import axios, { AxiosResponse, Method } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { Dispatch } from "redux";
import { TDispatch } from "../types/Thunk";
import { getAccessToken } from "../helpers/Misc";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export const apiCall = <
  TAction = any,
  TRequestData = any,
  TResponse extends {} = {}
>(
  action: any,
  method: Method,
  url: string,
  authorized: boolean = false,
  data: TRequestData | null = {} as TRequestData,
  params: any = {}
) => {
  return async (
    dispatch: TDispatch<TAction>
  ): Promise<AxiosResponse<TResponse>> => {
    dispatch({
      type: action.REQUEST
    });
    try {
      const refreshAuthToken = (failedRequest: any) =>
        apiClient
          .post("https://www.example.com/auth/token/refresh")
          .then(tokenRefreshResponse => {
            failedRequest.response.config.headers["Authorization"] =
              "Bearer " + tokenRefreshResponse.data.token;
            return Promise.resolve();
          });

      createAuthRefreshInterceptor(apiClient, refreshAuthToken);

      if (authorized) {
        apiClient.interceptors.request.use(request => {
          request.headers["Authorization"] = `Bearer ${getAccessToken()}`;
          return request;
        });
      }

      return await apiClient
        .request<TResponse>({
          data,
          method,
          params,
          url
        })
        .then((res: AxiosResponse<TResponse>) => {
          dispatch({
            type: action.SUCCESS,
            payload: res
          });

          return res;
        });
    } catch (err) {
      dispatch({
        type: action.FAILED,
        payload: err
      });
      throw err;
    }
  };
};

export const exampleSimpleAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SIMPLE_ACTION"
    });
  };
};
