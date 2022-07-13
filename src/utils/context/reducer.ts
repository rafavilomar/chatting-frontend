import { actionContext, actionType, contextState } from "./types";

export default (state: contextState, action: actionContext) => {
  const { payload, type } = action;

  switch (type) {
    case actionType.LOGIN:
      return {
        ...state,
        isLogged: payload,
      };

    case actionType.LOGOUT:
      return {
        ...state,
        isLogged: payload,
      };

    default:
      return { ...state };
  }
};
