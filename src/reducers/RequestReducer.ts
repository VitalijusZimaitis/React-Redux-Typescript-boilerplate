export const requestReducer = (state = {}, action: any) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);
  if (!matches) return state;

  const [, request, requestState] = matches;
  const errors: Array<any> = [];
  if (requestState === "FAILED") {
    errors.push(payload);
  }

  return {
    ...state,
    loading: requestState === "REQUEST",
    loaded: requestState === "SUCCESS",
    error: errors.length > 0 ? errors : false,
    [request]: {
      loading: requestState === "REQUEST",
      loaded: requestState === "SUCCESS",
      error: errors.length > 0 ? errors : false
    }
  };
};
