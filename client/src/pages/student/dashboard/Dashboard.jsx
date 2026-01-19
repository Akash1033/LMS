import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLogout from '../../auth/student/StudentLogout';
import { useAuth } from '../../../context/AuthContext';

function Dashboard() {
  const navigate = useNavigate();
  const {user } = useAuth()
  console.log("IN DASHBOARD OF USER: " , user);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100 gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <div className="flex flex-col gap-2">
        <button onClick={()=>navigate('/student/profile')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Profile</button>
        <button onClick={()=>navigate('/student/courses')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Courses</button>
        {/* <button onClick={()=>navigate('/student/progress')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">See your progress</button> */}
        <button onClick={()=>navigate('/student')} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Go to main menu</button>
        <StudentLogout/>
      </div>
    </div>
  );
}

export default Dashboard;