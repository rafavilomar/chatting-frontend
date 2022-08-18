import { useReducer } from "react";

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

  const login = (user: User) => {
    let failed = false;
    socket.emit("login", user);
    // const user: User = { username };
    socket.on("error-login", (error: boolean) => {
      if (!error) {
        dispatch({
          payload: user,
          type: actionType.LOGIN,
        });
      }
      failed = error;
    });
    return failed;
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
