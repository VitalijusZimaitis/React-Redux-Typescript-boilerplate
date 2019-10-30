import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";

export const useLoader = () => {
  const loading: any = useSelector((state: IAppState) => state.loading);

  return [loading];
};
