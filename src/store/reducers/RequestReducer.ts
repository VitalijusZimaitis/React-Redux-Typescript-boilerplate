const initialState = {
  requestsLoading: 0,
};

export const requestReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);
  if (!matches) return state;

  const [, request, requestState] = matches;

  let req: number = isNaN(state.requestsLoading) ? 0 : state.requestsLoading;
  let appErrors = [];
  switch (requestState) {
    case "REQUEST":
      req++;
      break;

    case "SUCCESS":
      req--;
      break;

    case "FAILED":
      req--;
      appErrors.push(payload.response?.data);
      break;

    default:
      req--;
      break;
  }

  return {
    ...state,
    requestsLoading: req > 0 ? req : 0,
    loading: req > 0,
    loaded: req < 1,
    error: appErrors.length > 0 ? appErrors : false,
    [request]: {
      loading: requestState === "REQUEST",
      loaded: requestState === "SUCCESS",
      error: requestState === "FAILED" ? payload.response?.data : false,
    },
  };
};
