import { createContext } from "react";
import { initialState } from "./state";
import { contextState } from "./types";

export default createContext<contextState>(initialState);
