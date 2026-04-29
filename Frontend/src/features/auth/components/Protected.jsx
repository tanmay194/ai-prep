// Protected.jsx
import { useAuth } from "../hooks/useAuth";
import React from "react";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const { loading, user } = useAuth(); // Call the hook properly

  if (loading) {
    return <main><h1>Loading.......</h1></main>;
  }

  if (!user) {
    // If user is null (because getMe failed), redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // Return the components directly
};

export default Protected;