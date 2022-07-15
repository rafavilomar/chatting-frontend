import React, { useContext, useEffect } from "react";

import socket from "./utils/socket.js";
import Login from "./views/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import GeneralContext from "./utils/context/context";
import Chat from "./views/Chat";
import ActiveUserList from "./component/ActiveUserList";

const ProtectedRoute = ({ children }: any) => {
  const { isLogged } = useContext(GeneralContext);
  if (!isLogged) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

function App() {
  useEffect(() => {
    socket.emit("connection", "Hi from client");
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
