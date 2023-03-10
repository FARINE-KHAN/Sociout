import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser == null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
