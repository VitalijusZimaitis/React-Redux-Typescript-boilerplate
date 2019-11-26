import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";

interface IRequestError {
  message: string;
  name: string;
  stack: string;
}

export const useRequest = () => {
  const request: any = useSelector((state: IAppState) => state.request);

  const isLoading = (key: string): boolean => {
    return request[key] && request[key].loading;
  };

  const isLoaded = (key: string): boolean => {
    return !!(request[key] && request[key].loaded);
  };

  const hasError = (key: string): boolean => {
    return !!(request[key] && request[key].error);
  };

  const getError = (key: string): IRequestError => {
    return request[key] && request[key].error;
  };

  return { isLoading, isLoaded, hasError, getError };
};
