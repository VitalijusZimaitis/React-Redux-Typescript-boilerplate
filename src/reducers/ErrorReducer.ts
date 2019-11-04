export const errorReducer = (state = {}, action: any) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILED)/.exec(type);

  if (!matches) return state;

  const [, , requestState] = matches;
  return {
    ...state,
    [action.action]: requestState === "FAILED" ? payload : undefined
  };
};
