import React, { useReducer } from "react";

import { actionType, contextState } from "./types";
import GeneralReducer from "./reducer";
import GeneralContext from "./context";
import socket from "../socket.js";
import User from "../../models/User";

export const initialState: contextState = {
  openActiveUserList: false,
  socket: socket,
};

const GeneralState = ({ children }: any) => {
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const login = (username: string) => {
    socket.emit("login", { username });
    const user: User = { username };
    dispatch({
      payload: user,
      type: actionType.LOGIN,
    });
  };

  const logout = () => {
    dispatch({
      payload: undefined,
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
