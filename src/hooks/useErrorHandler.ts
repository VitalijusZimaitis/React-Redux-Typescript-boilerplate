import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";

export const useErrorHandler = () => {
  const error: any = useSelector((state: IAppState) => state.error);

  return [error];
};
