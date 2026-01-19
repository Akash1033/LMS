import React from 'react';
import { Route } from 'react-router-dom';


const MentorAuth = React.lazy(() => import('../pages/auth/mentor/MentorAuth'));
const MentorDashboard = React.lazy(
    () => import('../pages/mentor/dashboard/MentorDashboard')
);
const MentorCourses = React.lazy(
    () => import('../pages/mentor/courses/Courses')
);

const MentorRoutes = () => (
    <>
        {/*  MENTOR ROUTES */}
        <Route path="/mentor/login" element={<MentorAuth />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        <Route path="/mentor/courses" element={<MentorCourses />} />
    </>
);

export default MentorRoutes;
