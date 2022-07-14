import React, { useReducer } from "react";

import { actionType, contextState } from "./types";
import GeneralReducer from "./reducer";
import GeneralContext from "./context";

export const initialState: contextState = {
  isLogged: true, //todo
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

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralState;
