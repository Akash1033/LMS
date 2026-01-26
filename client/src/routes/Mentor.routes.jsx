import React from 'react';
import { Route } from 'react-router-dom';
import GuestRoute from './auth/GuestRoute';
import ProtectedRoute from './auth/ProtectedRoute';

const MentorAuth = React.lazy(() => import('../pages/auth/mentor/MentorAuth'));
const MentorDashboard = React.lazy(
    () => import('../pages/mentor/dashboard/MentorDashboard')
);
const MentorCourses = React.lazy(
    () => import('../pages/mentor/courses/Courses')
);
const MentorOneCourse = React.lazy(
    () => import('../pages/mentor/courses/OneCourse')
);
const MentorCreateCourses = React.lazy(
    () => import('../pages/mentor/courses/CreateCourses')
);
const AddLesson = React.lazy(
    () => import('../pages/mentor/courses/AddLesson')
);
const PreviewLesson = React.lazy(
    () => import('../pages/mentor/courses/PreviewLesson')
);


const MentorRoutes = () => (
    <>
        {/*  MENTOR ROUTES */}
        <Route element={<GuestRoute allowedRoles={['mentor']} />}>
            <Route path="/mentor/login" element={<MentorAuth />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['mentor']} />}>
            <Route path="/mentor/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor/course/:courseId" element={<MentorOneCourse />} />
            <Route path="/mentor/createCourse" element={<MentorCreateCourses />} />
            <Route path="/mentor/:sectionId/addlesson" element={<AddLesson />} />
            <Route path="/mentor/previewlesson" element={<PreviewLesson />} />
        </Route>
    </>
);

export default MentorRoutes;
