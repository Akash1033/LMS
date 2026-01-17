import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

const GuestRoute = ()=>{
    const {user, loading} = useAuth();
    // if(loading) return <div> Loading... </div>
    if (user) {
        return <Navigate to={`/student/login`} replace />;
    }
    return <Outlet/>
}

export default GuestRoute