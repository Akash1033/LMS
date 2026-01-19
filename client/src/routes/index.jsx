import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentRoutes from './Student.routes';
import MentorRoutes from './Mentor.routes';
import AdminRoutes from './Admin.routes';

const IndexPage = React.lazy(
    () => import('../pages/role-selection/RoleSelection')
);

const AppRoutes = () => {
    return (
        <Router>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<IndexPage />} />

                    {StudentRoutes()}
                    {MentorRoutes()}
                    {AdminRoutes()}

                    {/* NOT FOUND */}
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </React.Suspense>
        </Router>
    );
};

export default AppRoutes;
