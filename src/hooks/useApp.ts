import { useSelector } from "react-redux";
import { IAppState } from "../store/Store";
import { IApp } from "../types/App";

export const useApp = () => {
  const appState: any = useSelector<IAppState, IApp>(
    (state: IAppState) => state.appState
  );

  const getActionName = (action: any) => {
    const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(action.REQUEST);
    if (!matches) return;
    const [, request] = matches;

    return request;
  };

  const isLoading = (action?: any) => {
    const actionName = getActionName(action);
    if (actionName) {
      return appState[actionName] && appState[actionName].loading;
    }
    return appState.loading;
  };

  const isLoaded = (action?: any) => {
    const actionName = getActionName(action);
    if (actionName) {
      return appState[actionName] && appState[actionName].loaded;
    }
    return appState.loaded;
  };

  return { app: { isLoading, isLoaded } };
};
