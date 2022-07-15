import React, { useReducer } from "react";

import { actionType, contextState } from "./types";
import GeneralReducer from "./reducer";
import GeneralContext from "./context";

export const initialState: contextState = {
  isLogged: true, //todo
  openActiveUserList: false,
};

const GeneralState = ({ children }: any) => {
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const login = () => {
    dispatch({
      payload: true,
      type: actionType.LOGIN,
    });
  };

  const logout = () => {
    dispatch({
      payload: false,
      type: actionType.LOGOUT,
    });
  };

  const handleActiveUserList = (value: boolean) => {
    dispatch({
      payload: value,
      type: actionType.HANDLE_ACTIVE_USER_LIST,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        login,
        logout,
        handleActiveUserList
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralState;
