import React, { useEffect } from "react";
import socket from "./utils/socket.js";

function App() {
  useEffect(() => {
    socket.emit("connection", "Hi from client");
  }, []);
  return (
    <div>
      <h1>Chatting</h1>
    </div>
  );
}

export default App;
