import React, { useEffect } from "react";

import socket from "./utils/socket.js";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    socket.emit("connection", "Hi from client");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<div>Chat</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
