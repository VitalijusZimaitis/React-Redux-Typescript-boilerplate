export const loadingReducer = (state = {}, action: any) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);

  if (!matches) return state;

  const [, , requestState] = matches;
  return {
    ...state,
    [action.action]: requestState === "REQUEST"
  };
};
