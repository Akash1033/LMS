import { useAuth } from '../../context/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRoute = ({ allowedRoles }) => {
    const { user, loading } = useAuth();
    if (loading) return <div>Verifying...</div>;
    console.log('Loding done now verifying user');
    if (!user) {
        console.log('user false');
        return <Navigate to="/" replace />;
    }
    console.log(
        'IN PROTECTED ROUTE ',
        'user: ',
        user,
        'user role: ',
        user.role,
        'allowedRoute:',
        allowedRoles
    );

    if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

    console.log(
        'user true now at allowedRoles && !allowedRoles.includes(user.role)'
    );


    console.log('not redirected to /student/login aagy chalo');

    return <Outlet />;
};

export default ProtectedRoute;
