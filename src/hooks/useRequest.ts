import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";

export const useRequest = () => {
  const request: any = useSelector((state: IAppState) => state.request);

  const isLoading = (key: string) => {
    return request[key] && request[key].loading;
  };

  const isLoaded = (key: string) => {
    return !!(request[key] && request[key].loaded);
  };

  const error = (key: string) => {
    if (request[key] && request[key].error) {
      return request[key] && request[key].error;
    }

    return false;
  };

  return { request: { isLoading, isLoaded, error } };
};
