import { actionContext, actionType, contextState } from "./types";

export default (state: contextState, action: actionContext): contextState => {
  const { payload, type } = action;

  switch (type) {

    case actionType.LOGIN:
      return {
        ...state,
        userLogged: payload,
      };

    case actionType.LOGOUT:
      return {
        ...state,
        userLogged: undefined,
      };

    case actionType.HANDLE_ACTIVE_USER_LIST:
      return {
        ...state,
        openActiveUserList: payload,
      };

    default:
      return { ...state };
  }
};
