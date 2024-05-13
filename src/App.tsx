import React, { useContext, useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import GeneralContext from "./utils/context/context";
import Chat from "./views/Chat";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

const ProtectedRoute = ({ children }: any) => {
  const { userLogged } = useContext(GeneralContext);
  if (!userLogged) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

function App() {
  const { socket, logout } = useContext(GeneralContext);

  socket.emit("connection", "Socket connection");

  useEffect(() => {
    return () => {
      logout!();
    };
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
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
