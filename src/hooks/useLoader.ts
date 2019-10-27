import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";

export const useLoader = (action: string) => {
  const isLoading: any = useSelector((state: IAppState) => state.loading);

  return [isLoading[action]];
};
