import React from 'react';
import { useAuth } from '../../../context/AuthContext';

function WatchCourse() {
    const { user } = useAuth();

    return <div>
        {user}
    </div>;
}

export default WatchCourse;
