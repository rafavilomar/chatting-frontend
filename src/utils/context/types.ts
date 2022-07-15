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
  isLogged: boolean;
  openActiveUserList: boolean;
  login?: () => void;
  logout?: () => void;
  handleActiveUserList?: (value: boolean) => void;
};
