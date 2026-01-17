import { useAuth } from '../../context/AuthContext';
import { Outlet, Navigate} from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user, loading } = useAuth();
    if (loading) return <div>Verifying....</div>;
    if (!user) <Navigate to={'/'} replace/>
    if(allowedRoles && !allowedRoles.includes(user.role)){
        return <Navigate to={`/studetn/dashboard`} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
