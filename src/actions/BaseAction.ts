import axios, { AxiosResponse, Method } from "axios";
import { Dispatch } from "redux";
import { TDispatch } from "../types/Thunk";

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
      return await apiClient
        .request<TResponse>({
          data,
          headers: {
            Authorization: authorized
              ? "Bearer " + localStorage.getItem("token")
              : ""
          },
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
