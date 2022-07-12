import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";

import socket from "./utils/socket.js";
import Login from "./views/Login";

function App() {
  useEffect(() => {
    socket.emit("connection", "Hi from client");
  }, []);
  return <Login/>;
}

export default App;
