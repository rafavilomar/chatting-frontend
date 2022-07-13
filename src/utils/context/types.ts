export type actionContext = {
  payload: any;
  type: actionType;
};

export enum actionType {
  LOGIN,
  LOGOUT,
}

export type contextState = {
  isLogged: boolean;
  login?: () => void;
  logout?: () => void;
};
