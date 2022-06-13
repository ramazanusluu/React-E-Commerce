import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children, admin }) {
  const { loggedIn, user } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  } else if (admin && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
