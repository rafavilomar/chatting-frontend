import React, { useReducer } from "react";

import User from "../../models/User";
import socket from "../socket.js";
import GeneralContext from "./context";
import GeneralReducer from "./reducer";
import { actionType, contextState } from "./types";

export const initialState: contextState = {
  openActiveUserList: false,
  socket: socket,
};

const GeneralState = ({ children }: any) => {
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const signup = (user: User) => {
    socket.emit("join", user);
    dispatch({
      type: actionType.SIGNUP,
      payload: user,
    });
  };

  const login = (user: User) => {
    dispatch({
      payload: user,
      type: actionType.LOGIN,
    });
  };

  const logout = () => {
    socket.emit("logout");
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
        signup,
        login,
        logout,
        handleActiveUserList,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralState;
