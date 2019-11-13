export const requestReducer = (state = {}, action: any) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);

  if (!matches) return state;

  const [, , requestState] = matches;
  return {
    ...state,
    [action.action]: {
      loading: requestState === "REQUEST",
      loaded: requestState === "SUCCESS",
      error: requestState === "FAILED" ? payload : undefined
    }
  };
};
