import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import GuestRoute from "./auth/GuestRoute";

const IndexPage = React.lazy(() =>
  import("../pages/role-selection/RoleSelection")
);

// IMPORTING MENTOR COMPONENTS/PAGES
const MentorAuth = React.lazy(() => 
  import("../pages/auth/mentor/MentorAuth")
);
const MentorDashboard = React.lazy(() =>
  import("../pages/mentor/dashboard/MentorDashboard")
);
const MentorCourses = React.lazy(() =>
  import("../pages/mentor/courses/Courses")
);

//IMPORTING STUDENT COMPONENTS/PAGES
const StudentAuth = React.lazy(() =>
  import("../pages/auth/student/StudentAuth")
);
const StudentRegister = React.lazy(() =>
  import("../pages/auth/student/StudentRegister")
);
const StudentVerify = React.lazy(() =>
  import("../pages/auth/student/StudentVerification")
);
const StudentDashboard = React.lazy(() =>
  import("../pages/student/dashboard/Dashboard")
);
const StudentProfile = React.lazy(() =>
  import("../pages/student/profile/StudentProfile")
);
const StudentCourses = React.lazy(() =>
  import("../pages/student/courses/StudentCourses")
);

//IMPORTING ADMIN PAGES/COMPONENTS
const AdminAuth = React.lazy(() => 
  import("../pages/auth/admin/AdminAuth")
);
const AdminDashboard = React.lazy(() =>
  import("../pages/admin/dashboard/AdminDashboard")
);

const AppRoutes = () => {
  return (
    
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<IndexPage />} />

          {/* STUDENT ROUTES */}
          <Route element= {<GuestRoute/>}>
          <Route path="/student/login" element={<StudentAuth />}  />
          <Route path="/student/verify" element={<StudentVerify />} />
          <Route path="/student/register" element={<StudentRegister />} />
          </Route>
          <Route element= {<ProtectedRoute allowedRoles={['student']}/>}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/courses" element={<StudentCourses />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}

          {/*  MENTOR ROUTES */}
          <Route path="/mentor/login" element={<MentorAuth />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/mentor/courses" element={<MentorCourses />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/login" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* NOT FOUND */}
          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default AppRoutes;
