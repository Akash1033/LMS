import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ROLE_REDIRECT = {
  student: "/student/dashboard",
  admin: "/admin/dashboard",
  mentor: "/mentor/dashboard",
};

const GuestRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Logged-in users should never see guest pages
  if (user) {
    return (
      <Navigate
        to={ROLE_REDIRECT[user.role] || "/"}
        replace
      />
    );
  }

  // Guest users can proceed
  return <Outlet />;
};

export default GuestRoute;
