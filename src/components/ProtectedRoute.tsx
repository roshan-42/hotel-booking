import { Navigate, Outlet } from "react-router-dom";
import { useRole } from "../context/useRole"; // Assuming your useRole hook is in hooks folder

const ProtectedRoute = () => {
  const role = useRole(); // Get user role

  return role === "admin" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
