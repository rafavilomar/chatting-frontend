import { Socket } from "socket.io-client";
import User from "../../models/User";

export type actionContext = {
  payload: any;
  type: actionType;
};

export enum actionType {
  LOGIN,
  LOGOUT,
  HANDLE_ACTIVE_USER_LIST,
}

export type contextState = {
  userLogged?: User;
  openActiveUserList: boolean;
  socket: Socket;
  login?: (username: string) => void;
  logout?: () => void;
  handleActiveUserList?: (value: boolean) => void;
};
