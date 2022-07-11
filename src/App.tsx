import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";

import socket from "./utils/socket.js";

function App() {
  useEffect(() => {
    socket.emit("connection", "Hi from client");
  }, []);
  return <Heading>Chatting</Heading>;
}

export default App;
