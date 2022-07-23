import React, { useContext } from "react";

import Login from "./views/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import GeneralContext from "./utils/context/context";
import Chat from "./views/Chat";

const ProtectedRoute = ({ children }: any) => {
  const { userLogged } = useContext(GeneralContext);
  if (!userLogged) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

function App() {
  const { socket } = useContext(GeneralContext);

  socket.emit("connection", "Socket connection");

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
